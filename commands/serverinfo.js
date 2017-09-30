const config = require('../config.js');
const utils = require('../utils.js');

module.exports = {
  run: function(message) {
    var guild = message.guild;
    var embed = utils.generateDekuDiv(message);
    var regions = {
      'brazil': ':flag_br: Brazil',
      'eu-central': ':flag_eu: EU Central',
      'hongkong': ':flag_hk: Hongkong',
      'us-central': ':flag_us: US Central',
      'us-east': ':flag_us: US East',
      'us-south': ':flag_us: US South',
      'us-west': ':flag_us: US West',
      'russia': ':flag_ru: Russia',
      'sydney': ':flag_au: Sydney',
      'eu-west': ':flag_eu: Western Europe'
    };
    var region = regions[guild.region] || guild.region;
    var offline = guild.members.filter(m=>m.presence.status=="offline").size;
    var online = guild.members.size - offline;
    embed.addField('Name', guild.name, true);
    embed.addField('Members', online + '/' + guild.members.size + ' online', true);
    embed.addField('Owner', guild.owner.user.tag, true);
    embed.addField('Region', region, true);
    embed.addField('Emojis', guild.emojis.size, true);
    embed.addField('Roles', guild.roles.size, true);
    embed.addField('ID', guild.id, true);
    embed.setThumbnail(guild.iconURL);

    message.channel.send({embed});
  }
}

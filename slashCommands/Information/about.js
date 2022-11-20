const {
  EmbedBuilder,
  CommandInteraction,
  Client,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  name: "about",
  description: "See information about this project.",
  type: ApplicationCommandType.ChatInput,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false,
    });

    const button = new ButtonBuilder()
      .setLabel("Invite")
      .setStyle(ButtonStyle.Link)
      .setURL(
        `https://cdn.discordapp.com/attachments/950816917545967616/1040865856990740531/il_fullxfull.1715728964_209s.jpg`
      );

    const button2 = new ButtonBuilder()
      .setLabel("Vote Here")
      .setStyle(ButtonStyle.Link)
      .setURL("https://discord.gg/pftPUD5yQ5");

    const button3 = new ButtonBuilder()
      .setLabel("Support Server")
      .setStyle(ButtonStyle.Link)
      .setURL("https://discord.gg/pftPUD5yQ5");

    const row = new ActionRowBuilder().addComponents(button, button2, button3);

    const mainPage = new EmbedBuilder()
      .setAuthor({
        name: "Aperstar",
        iconURL:
          "https://cdn.discordapp.com/attachments/950816917545967616/1040865856990740531/il_fullxfull.1715728964_209s.jpg",
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/950816917545967616/1040865856990740531/il_fullxfull.1715728964_209s.jpg"
      )
      .setColor(0x303236)
      .addFields([
        {
          name: "UPVOTE HERE",
          value:
            "[Click Here](https://discord.gg/pftPUD5yQ5)",
          inline: true,
        },
        {
          name: "Creator",
          value: "[ᴄᴏᴛᴜ🍁!#4342](https://discord.gg/pftPUD5yQ5)",
          inline: true,
        },
        {
          name: "Respected Owner",
          value: "[Here](https://discord.gg/pftPUD5yQ5)",
          inline: true,
        },
        {
          name: "\u200b",
          value: `[Aperstar](https://discord.com/api/oauth2/authorize?client_id=950783746326544384&permissions=36768832&scope=bot) was created by [ᴄᴏᴛᴜ🍁!#4342](https://discord.gg/pftPUD5yQ5). He really wanted to make a bot in which has some special and premium features free of cost. He introducked Aperstar`,
          inline: true,
        },
      ]);
    await interaction.followUp({ embeds: [mainPage], components: [row] });
  },
};

import Axios from 'axios';

type ReplyOptions = {
  channel: string
};

export function reply(message: string, channel: string): Promise<any> {
  console.log('replying...');
  console.log(message, channel);
  console.log(process.env.SERVER_SLACK_BOT_TOKEN);
  return Axios.request({
    method: 'POST',
    url: 'https://slack.com/api/chat.postmessage',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`
    },
    data: {
      text: message,
      channel
    }
  });
}

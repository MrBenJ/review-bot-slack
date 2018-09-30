import Axios from 'axios';

type ReplyOptions = {
  channel: string
};

export function reply(message: string, channel: string): Promise<any> {
  return Axios.request({
    method: 'POST',
    url: 'https://slack.com/api/chat.postMessage',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SERVER_SLACK_BOT_TOKEN}`
    },
    data: {
      text: message,
      channel
    }
  });
}

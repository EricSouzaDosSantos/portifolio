const YOUTUBE_URL_ID_PATTERN =
  /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/;
const RAW_YOUTUBE_ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/;

/**
 * Extrai o ID de um vídeo a partir de uma URL do YouTube (watch, youtu.be,
 * embed ou shorts) ou de um ID já "cru". Retorna null quando o valor não é
 * reconhecido, para que o chamador possa simplesmente não renderizar nada.
 */
export function extractYouTubeVideoId(url: string | undefined | null): string | null {
  if (!url) {
    return null;
  }

  const trimmed = url.trim();
  if (RAW_YOUTUBE_ID_PATTERN.test(trimmed)) {
    return trimmed;
  }

  return trimmed.match(YOUTUBE_URL_ID_PATTERN)?.[1] ?? null;
}

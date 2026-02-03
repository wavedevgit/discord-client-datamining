package com.discord.chat.bridge.embed;

import com.discord.media_player.MediaSource;
import com.discord.media_player.MediaType;
import com.discord.primitives.ChannelId;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import lr.p;
import lr.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0000\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\n\u0010\u0000\u001a\u00020\u0001*\u00020\u0002\u001a)\u0010\u0003\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u0004*\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000b\u001a5\u0010\f\u001a\u0004\u0018\u00010\u0005*\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u0011\u0010\u0012\u001a\u001a\u0010\u0013\u001a\u0012\u0012\u0006\u0012\u0004\u0018\u00010\u0015\u0012\u0006\u0012\u0004\u0018\u00010\u00150\u0014*\u00020\u0002\u001a\n\u0010\u0016\u001a\u00020\u000e*\u00020\u0002\u001a\u000e\u0010\u0017\u001a\u0004\u0018\u00010\u0018*\u00020\u0002H\u0002\u001a\f\u0010\u0019\u001a\u00020\u001a*\u00020\u0002H\u0002¨\u0006\u001b"}, d2 = {"getTag", "", "Lcom/discord/chat/bridge/embed/Embed;", "toImageMediaSources", "", "Lcom/discord/media_player/MediaSource;", "channelId", "Lcom/discord/primitives/ChannelId;", "messageId", "Lcom/discord/primitives/MessageId;", "toImageMediaSources-SHRpUJI", "(Lcom/discord/chat/bridge/embed/Embed;JLjava/lang/String;)Ljava/util/List;", "toMediaSource", "shouldAutoPlay", "", "portal", "", "toMediaSource-UBIQNlQ", "(Lcom/discord/chat/bridge/embed/Embed;JLjava/lang/String;ZLjava/lang/Double;)Lcom/discord/media_player/MediaSource;", "getTargetDimensions", "Lkotlin/Pair;", "", "isInlineMedia", "getMedia", "Lcom/discord/chat/bridge/embed/EmbedUrlProvider;", "getMediaType", "Lcom/discord/chat/bridge/embed/EmbedMediaType;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmbedUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmbedUtils.kt\ncom/discord/chat/bridge/embed/EmbedUtilsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,153:1\n1563#2:154\n1634#2,3:155\n1#3:158\n*S KotlinDebug\n*F\n+ 1 EmbedUtils.kt\ncom/discord/chat/bridge/embed/EmbedUtilsKt\n*L\n22#1:154\n22#1:155,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbedUtilsKt {

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[EmbedMediaType.values().length];
            try {
                iArr[EmbedMediaType.GIFV.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[EmbedMediaType.VIDEO.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[EmbedMediaType.IMAGE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[EmbedMediaType.NONE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[EmbedType.values().length];
            try {
                iArr2[EmbedType.GIFV.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[EmbedType.Image.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[EmbedType.Video.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[EmbedType.Link.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr2[EmbedType.HTML.ordinal()] = 5;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr2[EmbedType.Article.ordinal()] = 6;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr2[EmbedType.Rich.ordinal()] = 7;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr2[EmbedType.Tweet.ordinal()] = 8;
            } catch (NoSuchFieldError unused12) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    private static final EmbedUrlProvider getMedia(Embed embed) {
        switch (WhenMappings.$EnumSwitchMapping$1[embed.getType().ordinal()]) {
            case 1:
            case 3:
                EmbedMedia video = embed.getVideo();
                if (video != null) {
                    return video;
                }
                return embed.getThumbnail();
            case 2:
            case 8:
                EmbedMedia image = embed.getImage();
                if (image != null) {
                    return image;
                }
                return embed.getThumbnail();
            case 4:
            case 5:
                return null;
            case 6:
            case 7:
                EmbedMedia video2 = embed.getVideo();
                if (video2 != null) {
                    return video2;
                }
                EmbedMedia image2 = embed.getImage();
                if (image2 != null) {
                    return image2;
                }
                return embed.getThumbnail();
            default:
                return embed.getImage();
        }
    }

    private static final EmbedMediaType getMediaType(Embed embed) {
        int i10 = WhenMappings.$EnumSwitchMapping$1[embed.getType().ordinal()];
        if (i10 != 1) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    if (i10 != 6 && i10 != 7) {
                        if (embed.getImage() != null) {
                            return EmbedMediaType.IMAGE;
                        }
                        return EmbedMediaType.NONE;
                    } else if (embed.getVideo() != null) {
                        return EmbedMediaType.VIDEO;
                    } else {
                        if (embed.getImage() != null) {
                            return EmbedMediaType.IMAGE;
                        }
                        return EmbedMediaType.NONE;
                    }
                }
                return EmbedMediaType.NONE;
            }
            return EmbedMediaType.VIDEO;
        }
        return EmbedMediaType.GIFV;
    }

    @NotNull
    public static final String getTag(@NotNull Embed embed) {
        Intrinsics.checkNotNullParameter(embed, "<this>");
        String simpleName = embed.getClass().getSimpleName();
        String name = embed.getType().name();
        return simpleName + ": " + name;
    }

    @NotNull
    public static final Pair<Integer, Integer> getTargetDimensions(@NotNull Embed embed) {
        Integer num;
        Integer num2;
        Integer num3;
        Pair<Integer, Integer> a10;
        Intrinsics.checkNotNullParameter(embed, "<this>");
        int i10 = WhenMappings.$EnumSwitchMapping$0[getMediaType(embed).ordinal()];
        Integer num4 = null;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return v.a(null, null);
                    }
                    throw new p();
                }
                EmbedMedia image = embed.getImage();
                if (image != null && (a10 = v.a(Integer.valueOf(image.getWidth()), Integer.valueOf(image.getHeight()))) != null) {
                    return a10;
                }
                return v.a(null, null);
            } else if (isInlineMedia(embed)) {
                EmbedMedia video = embed.getVideo();
                if (video != null) {
                    num3 = Integer.valueOf(video.getWidth());
                } else {
                    num3 = null;
                }
                EmbedMedia video2 = embed.getVideo();
                if (video2 != null) {
                    num4 = Integer.valueOf(video2.getHeight());
                }
                return v.a(num3, num4);
            } else if (embed.getVideo() != null) {
                return v.a(Integer.valueOf(embed.getVideo().getWidth()), Integer.valueOf(embed.getVideo().getHeight()));
            } else {
                if (embed.getThumbnail() != null) {
                    return v.a(Integer.valueOf(embed.getThumbnail().getWidth()), Integer.valueOf(embed.getThumbnail().getHeight()));
                }
                EmbedMedia image2 = embed.getImage();
                if (image2 != null) {
                    num2 = Integer.valueOf(image2.getWidth());
                } else {
                    num2 = null;
                }
                EmbedMedia image3 = embed.getImage();
                if (image3 != null) {
                    num4 = Integer.valueOf(image3.getHeight());
                }
                return v.a(num2, num4);
            }
        }
        EmbedThumbnail thumbnail = embed.getThumbnail();
        if (thumbnail != null) {
            num = Integer.valueOf(thumbnail.getWidth());
        } else {
            num = null;
        }
        EmbedThumbnail thumbnail2 = embed.getThumbnail();
        if (thumbnail2 != null) {
            num4 = Integer.valueOf(thumbnail2.getHeight());
        }
        return v.a(num, num4);
    }

    public static final boolean isInlineMedia(@NotNull Embed embed) {
        Intrinsics.checkNotNullParameter(embed, "<this>");
        if (getMedia(embed) == null && embed.getVideo() == null) {
            return false;
        }
        int i10 = WhenMappings.$EnumSwitchMapping$1[embed.getType().ordinal()];
        if (i10 == 1) {
            return true;
        }
        if ((i10 != 2 && i10 != 3) || embed.getAuthor() != null || embed.getTitle() != null) {
            return false;
        }
        return true;
    }

    /* renamed from: toImageMediaSources-SHRpUJI  reason: not valid java name */
    public static final List<MediaSource> m392toImageMediaSourcesSHRpUJI(@NotNull Embed toImageMediaSources, long j10, @NotNull String str) {
        Intrinsics.checkNotNullParameter(toImageMediaSources, "$this$toImageMediaSources");
        String messageId = str;
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        List<EmbedMedia> images = toImageMediaSources.getImages();
        if (images != null) {
            List<EmbedMedia> list = images;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (Iterator it = list.iterator(); it.hasNext(); it = it) {
                EmbedMedia embedMedia = (EmbedMedia) it.next();
                ArrayList arrayList2 = arrayList;
                arrayList2.add(new MediaSource(null, embedMedia.getEmbedUrl(), null, null, getTag(toImageMediaSources), MediaType.IMAGE, false, ChannelId.m1059boximpl(j10), messageId, null, null, Boolean.valueOf(embedMedia.getSrcIsAnimated()), 1549, null));
                messageId = str;
                arrayList = arrayList2;
            }
            return arrayList;
        }
        return null;
    }

    /* renamed from: toMediaSource-UBIQNlQ  reason: not valid java name */
    public static final MediaSource m393toMediaSourceUBIQNlQ(@NotNull Embed toMediaSource, long j10, @NotNull String messageId, boolean z10, Double d10) {
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        String str7;
        String str8;
        Integer num;
        Intrinsics.checkNotNullParameter(toMediaSource, "$this$toMediaSource");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        int i10 = WhenMappings.$EnumSwitchMapping$0[getMediaType(toMediaSource).ordinal()];
        boolean z11 = false;
        Integer num2 = null;
        Boolean bool = null;
        Integer num3 = null;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return null;
                    }
                    throw new p();
                }
                EmbedMedia image = toMediaSource.getImage();
                if (image != null) {
                    str7 = image.getEmbedUrl();
                } else {
                    str7 = null;
                }
                String tag = getTag(toMediaSource);
                MediaType mediaType = MediaType.IMAGE;
                EmbedMedia image2 = toMediaSource.getImage();
                if (image2 != null) {
                    str8 = image2.getPlaceholder();
                } else {
                    str8 = null;
                }
                EmbedMedia image3 = toMediaSource.getImage();
                if (image3 != null) {
                    num = image3.getPlaceholderVersion();
                } else {
                    num = null;
                }
                EmbedMedia image4 = toMediaSource.getImage();
                if (image4 != null) {
                    bool = Boolean.valueOf(image4.getSrcIsAnimated());
                }
                return new MediaSource(null, str7, str8, num, tag, mediaType, z10, ChannelId.m1059boximpl(j10), messageId, null, null, bool, 1537, null);
            }
            EmbedMedia video = toMediaSource.getVideo();
            if (video != null) {
                str4 = video.getProxyURL();
            } else {
                str4 = null;
            }
            EmbedThumbnail thumbnail = toMediaSource.getThumbnail();
            if (thumbnail != null) {
                str5 = thumbnail.getEmbedUrl();
            } else {
                str5 = null;
            }
            String tag2 = getTag(toMediaSource);
            MediaType mediaType2 = MediaType.VIDEO;
            EmbedMedia video2 = toMediaSource.getVideo();
            if (video2 != null) {
                str6 = video2.getPlaceholder();
            } else {
                str6 = null;
            }
            EmbedMedia video3 = toMediaSource.getVideo();
            if (video3 != null) {
                num3 = video3.getPlaceholderVersion();
            }
            EmbedThumbnail thumbnail2 = toMediaSource.getThumbnail();
            if (thumbnail2 != null) {
                z11 = thumbnail2.getSrcIsAnimated();
            }
            return new MediaSource(str4, str5, str6, num3, tag2, mediaType2, false, ChannelId.m1059boximpl(j10), messageId, null, d10, Boolean.valueOf(z11), IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, null);
        }
        EmbedMedia video4 = toMediaSource.getVideo();
        if (video4 != null) {
            str = video4.getEmbedUrl();
        } else {
            str = null;
        }
        EmbedThumbnail thumbnail3 = toMediaSource.getThumbnail();
        if (thumbnail3 != null) {
            str2 = thumbnail3.getEmbedUrl();
        } else {
            str2 = null;
        }
        String tag3 = getTag(toMediaSource);
        MediaType mediaType3 = MediaType.GIFV;
        EmbedMedia video5 = toMediaSource.getVideo();
        if (video5 != null) {
            str3 = video5.getPlaceholder();
        } else {
            str3 = null;
        }
        EmbedMedia video6 = toMediaSource.getVideo();
        if (video6 != null) {
            num2 = video6.getPlaceholderVersion();
        }
        EmbedThumbnail thumbnail4 = toMediaSource.getThumbnail();
        if (thumbnail4 != null) {
            z11 = thumbnail4.getSrcIsAnimated();
        }
        return new MediaSource(str, str2, str3, num2, tag3, mediaType3, z10, ChannelId.m1059boximpl(j10), messageId, null, d10, Boolean.valueOf(z11), IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, null);
    }
}

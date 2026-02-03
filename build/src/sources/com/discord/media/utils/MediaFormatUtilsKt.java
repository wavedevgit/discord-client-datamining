package com.discord.media.utils;

import android.media.MediaFormat;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001c\n\u0000\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\u001a\n\u0010\u0007\u001a\u00020\b*\u00020\u0002\"\u0017\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u00028F¢\u0006\u0006\u001a\u0004\b\u0003\u0010\u0004\"\u0017\u0010\u0005\u001a\u0004\u0018\u00010\u0001*\u00020\u00028F¢\u0006\u0006\u001a\u0004\b\u0006\u0010\u0004\"\u0017\u0010\t\u001a\u0004\u0018\u00010\n*\u00020\u00028F¢\u0006\u0006\u001a\u0004\b\u000b\u0010\f\"\u0017\u0010\r\u001a\u0004\u0018\u00010\n*\u00020\u00028F¢\u0006\u0006\u001a\u0004\b\u000e\u0010\f\"\u0017\u0010\u000f\u001a\u0004\u0018\u00010\u0001*\u00020\u00028F¢\u0006\u0006\u001a\u0004\b\u0010\u0010\u0004¨\u0006\u0011"}, d2 = {"mimeType", "", "Landroid/media/MediaFormat;", "getMimeType", "(Landroid/media/MediaFormat;)Ljava/lang/String;", "codecType", "getCodecType", "isHevcVideo", "", "profile", "", "getProfile", "(Landroid/media/MediaFormat;)Ljava/lang/Integer;", "level", "getLevel", "profileName", "getProfileName", "media_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaFormatUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaFormatUtils.kt\ncom/discord/media/utils/MediaFormatUtilsKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,55:1\n1#2:56\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaFormatUtilsKt {
    public static final String getCodecType(@NotNull MediaFormat mediaFormat) {
        Intrinsics.checkNotNullParameter(mediaFormat, "<this>");
        String mimeType = getMimeType(mediaFormat);
        if (mimeType != null) {
            switch (mimeType.hashCode()) {
                case -1851077871:
                    if (mimeType.equals("video/dolby-vision")) {
                        return "dvh1";
                    }
                    return null;
                case -1664118616:
                    if (mimeType.equals("video/3gpp")) {
                        return "h263";
                    }
                    return null;
                case -1662735862:
                    if (mimeType.equals("video/av01")) {
                        return "av01";
                    }
                    return null;
                case -1662541442:
                    if (mimeType.equals("video/hevc")) {
                        return "hvc1";
                    }
                    return null;
                case 5751993:
                    if (mimeType.equals("video/mpeg2")) {
                        return "mp2v";
                    }
                    return null;
                case 1187890754:
                    if (mimeType.equals("video/mp4v-es")) {
                        return "mp4v";
                    }
                    return null;
                case 1331836730:
                    if (mimeType.equals("video/avc")) {
                        return "avc1";
                    }
                    return null;
                case 1599127256:
                    if (mimeType.equals("video/x-vnd.on2.vp8")) {
                        return "vp08";
                    }
                    return null;
                case 1599127257:
                    if (mimeType.equals("video/x-vnd.on2.vp9")) {
                        return "vp09";
                    }
                    return null;
                default:
                    return null;
            }
        }
        return null;
    }

    public static final Integer getLevel(@NotNull MediaFormat mediaFormat) {
        Object b10;
        Intrinsics.checkNotNullParameter(mediaFormat, "<this>");
        try {
            Result.a aVar = Result.f33071e;
            b10 = Result.b(Integer.valueOf(mediaFormat.getInteger("level")));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33071e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.g(b10)) {
            b10 = null;
        }
        return (Integer) b10;
    }

    public static final String getMimeType(@NotNull MediaFormat mediaFormat) {
        Object b10;
        Intrinsics.checkNotNullParameter(mediaFormat, "<this>");
        try {
            Result.a aVar = Result.f33071e;
            b10 = Result.b(mediaFormat.getString("mime"));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33071e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.g(b10)) {
            b10 = null;
        }
        return (String) b10;
    }

    public static final Integer getProfile(@NotNull MediaFormat mediaFormat) {
        Object b10;
        Intrinsics.checkNotNullParameter(mediaFormat, "<this>");
        try {
            Result.a aVar = Result.f33071e;
            b10 = Result.b(Integer.valueOf(mediaFormat.getInteger("profile")));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33071e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.g(b10)) {
            b10 = null;
        }
        return (Integer) b10;
    }

    public static final String getProfileName(@NotNull MediaFormat mediaFormat) {
        Intrinsics.checkNotNullParameter(mediaFormat, "<this>");
        String mimeType = getMimeType(mediaFormat);
        if (Intrinsics.areEqual(mimeType, "video/avc")) {
            Integer profile = getProfile(mediaFormat);
            if (profile != null && profile.intValue() == 1) {
                return "baseline";
            }
            if (profile != null && profile.intValue() == 2) {
                return "main";
            }
            if (profile != null && profile.intValue() == 4) {
                return "extended";
            }
            if (profile != null && profile.intValue() == 8) {
                return "high";
            }
            if (profile == null || profile.intValue() != 16) {
                return "other";
            }
            return "high10";
        } else if (Intrinsics.areEqual(mimeType, "video/hevc")) {
            Integer profile2 = getProfile(mediaFormat);
            if (profile2 != null && profile2.intValue() == 1) {
                return "main";
            }
            if (profile2 != null && profile2.intValue() == 2) {
                return "main10";
            }
            if (profile2 != null && profile2.intValue() == 4) {
                return "mainstill";
            }
            if (profile2 != null && profile2.intValue() == 4096) {
                return "main10hdr";
            }
            if (profile2 == null || profile2.intValue() != 8192) {
                return "other";
            }
            return "main10hdrplus";
        } else {
            return null;
        }
    }

    public static final boolean isHevcVideo(@NotNull MediaFormat mediaFormat) {
        Intrinsics.checkNotNullParameter(mediaFormat, "<this>");
        return Intrinsics.areEqual(getMimeType(mediaFormat), "video/hevc");
    }
}

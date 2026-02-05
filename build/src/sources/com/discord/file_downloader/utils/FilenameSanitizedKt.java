package com.discord.file_downloader.utils;

import android.webkit.MimeTypeMap;
import com.reactnativecommunity.clipboard.ClipboardModule;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0000\n\u0002\u0010\u000e\n\u0002\u0010\r\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010$\n\u0002\b\u0002\u001a\n\u0010\u0000\u001a\u00020\u0001*\u00020\u0002\u001a\u0010\u0010\u0003\u001a\u00020\u00012\u0006\u0010\u0004\u001a\u00020\u0001H\u0002\u001a\u0018\u0010\u0005\u001a\u00020\u00012\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0006\u001a\u00020\u0007H\u0002\u001a\u0018\u0010\b\u001a\u00020\u00012\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0006\u001a\u00020\u0007H\u0002\u001a\u0018\u0010\t\u001a\u00020\u00012\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0006\u001a\u00020\u0007H\u0002\u001a\u0010\u0010\n\u001a\u00020\u00012\u0006\u0010\u0004\u001a\u00020\u0001H\u0002\u001a\f\u0010\r\u001a\u0004\u0018\u00010\u0001*\u00020\u0001\"\u001a\u0010\u000b\u001a\u000e\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u00010\fX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"filenameSanitized", "", "", "decodeUrlSafely", "filename", "processFilename", "useUrlEncoded", "", "removeFileSizeModifiers", "fixAtSeparatorExtensions", "sanitizeInvalidCharacters", "EXTENSION_TO_MIME_TYPE", "", "getMimeTypeFromFilename", "file_downloader_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FilenameSanitizedKt {
    @NotNull
    private static final Map<String, String> EXTENSION_TO_MIME_TYPE = o0.m(v.a("avif", "image/avif"), v.a("gif", "image/gif"), v.a("heic", ClipboardModule.MIMETYPE_HEIC), v.a("jpeg", ClipboardModule.MIMETYPE_JPEG), v.a("jpg", ClipboardModule.MIMETYPE_JPEG), v.a("mov", "video/quicktime"), v.a("mp3", "audio/mpeg"), v.a("mp4", "video/mp4"), v.a("pdf", "application/pdf"), v.a("png", ClipboardModule.MIMETYPE_PNG), v.a("txt", "text/plain"), v.a("wav", "audio/wav"), v.a("webm", "video/webm"), v.a("webp", ClipboardModule.MIMETYPE_WEBP), v.a("zip", "application/zip"));

    private static final String decodeUrlSafely(String str) {
        String decode = URLDecoder.decode(str, "UTF-8");
        Intrinsics.checkNotNullExpressionValue(decode, "decode(...)");
        return decode;
    }

    @NotNull
    public static final String filenameSanitized(@NotNull CharSequence charSequence) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        String obj = charSequence.toString();
        try {
            return processFilename(decodeUrlSafely(obj), false);
        } catch (UnsupportedEncodingException unused) {
            return processFilename(obj, true);
        } catch (IllegalArgumentException unused2) {
            return processFilename(obj, true);
        }
    }

    private static final String fixAtSeparatorExtensions(String str, boolean z10) {
        String str2;
        if (z10) {
            str2 = "%40";
        } else {
            str2 = "@";
        }
        FilenamePatterns filenamePatterns = FilenamePatterns.INSTANCE;
        String replace = filenamePatterns.binExtensionFixPattern(str2).replace(str, "$1.$2");
        if (Intrinsics.areEqual(replace, str)) {
            return filenamePatterns.atSeparatorPattern(str2).replace(str, "$1.$2");
        }
        return replace;
    }

    public static final String getMimeTypeFromFilename(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        String lowerCase = StringsKt.X0(str, '.', "").toLowerCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        if (lowerCase.length() == 0) {
            return null;
        }
        try {
            String mimeTypeFromExtension = MimeTypeMap.getSingleton().getMimeTypeFromExtension(lowerCase);
            if (mimeTypeFromExtension == null) {
                return EXTENSION_TO_MIME_TYPE.get(lowerCase);
            }
            return mimeTypeFromExtension;
        } catch (RuntimeException unused) {
            return EXTENSION_TO_MIME_TYPE.get(lowerCase);
        }
    }

    private static final String processFilename(String str, boolean z10) {
        return sanitizeInvalidCharacters(fixAtSeparatorExtensions(removeFileSizeModifiers(str, z10), z10));
    }

    private static final String removeFileSizeModifiers(String str, boolean z10) {
        String str2;
        if (z10) {
            str2 = "%3A";
        } else {
            str2 = ":";
        }
        return FilenamePatterns.INSTANCE.sizeModifierPattern(str2).replace(str, "$1");
    }

    private static final String sanitizeInvalidCharacters(String str) {
        return FilenamePatterns.INSTANCE.getINVALID_FILENAME_CHARS().replace(str, "_");
    }
}

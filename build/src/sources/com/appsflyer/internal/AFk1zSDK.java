package com.appsflyer.internal;

import java.security.MessageDigest;
import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Charsets;
import kotlin.text.MatchGroup;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nStringExtensions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StringExtensions.kt\ncom/appsflyer/internal/util/StringExtensionsKt\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,126:1\n13004#2,3:127\n*S KotlinDebug\n*F\n+ 1 StringExtensions.kt\ncom/appsflyer/internal/util/StringExtensionsKt\n*L\n54#1:127,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFk1zSDK {
    public static final String AFAdRevenueData(String str, String str2) {
        MessageDigest messageDigest = MessageDigest.getInstance(str2);
        byte[] bytes = str.getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "");
        byte[] digest = messageDigest.digest(bytes);
        Intrinsics.checkNotNullExpressionValue(digest, "");
        String str3 = "";
        for (byte b10 : digest) {
            String format = String.format("%02x", Arrays.copyOf(new Object[]{Byte.valueOf(b10)}, 1));
            Intrinsics.checkNotNullExpressionValue(format, "");
            str3 = str3 + format;
        }
        return str3;
    }

    public static final int getMediationNetwork(@NotNull String str) {
        int i10;
        int i11;
        String a10;
        Integer intOrNull;
        String a11;
        Integer intOrNull2;
        String a12;
        Integer intOrNull3;
        Intrinsics.checkNotNullParameter(str, "");
        MatchResult h10 = new Regex("(\\d+).(\\d+).(\\d+).*").h(str);
        if (h10 != null) {
            MatchGroup matchGroup = h10.d().get(1);
            int i12 = 0;
            if (matchGroup != null && (a12 = matchGroup.a()) != null && (intOrNull3 = StringsKt.toIntOrNull(a12)) != null) {
                i10 = intOrNull3.intValue();
            } else {
                i10 = 0;
            }
            int i13 = i10 * 1000000;
            MatchGroup matchGroup2 = h10.d().get(2);
            if (matchGroup2 != null && (a11 = matchGroup2.a()) != null && (intOrNull2 = StringsKt.toIntOrNull(a11)) != null) {
                i11 = intOrNull2.intValue();
            } else {
                i11 = 0;
            }
            int i14 = i13 + (i11 * 1000);
            MatchGroup matchGroup3 = h10.d().get(3);
            if (matchGroup3 != null && (a10 = matchGroup3.a()) != null && (intOrNull = StringsKt.toIntOrNull(a10)) != null) {
                i12 = intOrNull.intValue();
            }
            return i14 + i12;
        }
        return -1;
    }
}

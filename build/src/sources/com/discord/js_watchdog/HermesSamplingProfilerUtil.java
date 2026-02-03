package com.discord.js_watchdog;

import java.io.File;
import java.io.FileInputStream;
import kotlin.Metadata;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import ur.b;
import ur.c;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0006\u001a\u00020\u0007J\u0010\u0010\b\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\u0007H\u0002¨\u0006\n"}, d2 = {"Lcom/discord/js_watchdog/HermesSamplingProfilerUtil;", "", "<init>", "()V", "findSampleTrace", "", "cacheDir", "Ljava/io/File;", "readFile", "file", "js_watchdog_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nHermesSamplingProfilerUtil.kt\nKotlin\n*S Kotlin\n*F\n+ 1 HermesSamplingProfilerUtil.kt\ncom/discord/js_watchdog/HermesSamplingProfilerUtil\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,89:1\n1#2:90\n538#3:91\n523#3,6:92\n*S KotlinDebug\n*F\n+ 1 HermesSamplingProfilerUtil.kt\ncom/discord/js_watchdog/HermesSamplingProfilerUtil\n*L\n59#1:91\n59#1:92,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class HermesSamplingProfilerUtil {
    @NotNull
    public static final HermesSamplingProfilerUtil INSTANCE = new HermesSamplingProfilerUtil();

    private HermesSamplingProfilerUtil() {
    }

    private final String readFile(File file) {
        FileInputStream fileInputStream = new FileInputStream(file);
        try {
            byte[] c10 = b.c(fileInputStream);
            c.a(fileInputStream, null);
            return StringsKt.x(c10);
        } finally {
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:103:0x01a0  */
    /* JADX WARN: Removed duplicated region for block: B:114:0x013e A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:116:0x0112 A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.String findSampleTrace(@org.jetbrains.annotations.NotNull java.io.File r12) {
        /*
            Method dump skipped, instructions count: 420
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.js_watchdog.HermesSamplingProfilerUtil.findSampleTrace(java.io.File):java.lang.String");
    }
}

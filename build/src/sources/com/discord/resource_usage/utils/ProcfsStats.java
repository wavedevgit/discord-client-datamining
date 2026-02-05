package com.discord.resource_usage.utils;

import android.os.Process;
import au.e;
import com.discord.resource_usage.utils.ProcfsStats;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.function.Supplier;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import or.l;
import org.jetbrains.annotations.NotNull;
import zr.c;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0080\b\u0018\u0000 \u00142\u00020\u0001:\u0001\u0014B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\n\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0015"}, d2 = {"Lcom/discord/resource_usage/utils/ProcfsStats;", "", "totalTime", "", "rssPages", "<init>", "(JJ)V", "getTotalTime", "()J", "getRssPages", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "Companion", "resource_usage_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ProcfsStats {
    private static final ThreadLocal<char[]> readBuffer;
    private final long rssPages;
    private final long totalTime;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy statFile$delegate = l.a(new Function0() { // from class: a8.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            File statFile_delegate$lambda$0;
            statFile_delegate$lambda$0 = ProcfsStats.statFile_delegate$lambda$0();
            return statFile_delegate$lambda$0;
        }
    });

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0010\u0019\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u000e\u001a\u0004\u0018\u00010\u000fJ\u000e\u0010\u0010\u001a\u0004\u0018\u00010\u000f*\u00020\u0005H\u0002R\u001b\u0010\u0004\u001a\u00020\u00058BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\u0006\u0010\u0007R2\u0010\n\u001a&\u0012\f\u0012\n \r*\u0004\u0018\u00010\f0\f \r*\u0012\u0012\f\u0012\n \r*\u0004\u0018\u00010\f0\f\u0018\u00010\u000b0\u000bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/discord/resource_usage/utils/ProcfsStats$Companion;", "", "<init>", "()V", "statFile", "Ljava/io/File;", "getStatFile", "()Ljava/io/File;", "statFile$delegate", "Lkotlin/Lazy;", "readBuffer", "Ljava/lang/ThreadLocal;", "", "kotlin.jvm.PlatformType", "readStatFile", "Lcom/discord/resource_usage/utils/ProcfsStats;", "parsePidStats", "resource_usage_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nProcfsStats.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ProcfsStats.kt\ncom/discord/resource_usage/utils/ProcfsStats$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,74:1\n1#2:75\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final File getStatFile() {
            return (File) ProcfsStats.statFile$delegate.getValue();
        }

        private final ProcfsStats parsePidStats(File file) {
            String sb2;
            try {
                if (file.exists()) {
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(file), Charsets.UTF_8), 8192);
                    StringBuilder sb3 = new StringBuilder();
                    Object obj = ProcfsStats.readBuffer.get();
                    Intrinsics.checkNotNull(obj);
                    char[] cArr = (char[]) obj;
                    int i10 = 0;
                    while (true) {
                        int read = bufferedReader.read(cArr);
                        if (read != -1) {
                            i10 += read;
                            if (i10 > 1048576) {
                                sb2 = null;
                                break;
                            }
                            sb3.append(cArr, 0, read);
                            Intrinsics.checkNotNullExpressionValue(sb3, "append(...)");
                        } else {
                            sb2 = sb3.toString();
                            break;
                        }
                    }
                    c.a(bufferedReader, null);
                    if (sb2 == null || sb2.length() <= 0) {
                        return null;
                    }
                    List L0 = StringsKt.L0(sb2, new char[]{' '}, false, 0, 6, null);
                    return new ProcfsStats(e.X((String) L0.get(13), 0L) + e.X((String) L0.get(14), 0L), e.X((String) L0.get(23), 0L));
                }
            } catch (Exception unused) {
            }
            return null;
        }

        public final ProcfsStats readStatFile() {
            return parsePidStats(getStatFile());
        }

        private Companion() {
        }
    }

    static {
        final Supplier supplier = new Supplier() { // from class: a8.b
            @Override // java.util.function.Supplier
            public final Object get() {
                char[] readBuffer$lambda$1;
                readBuffer$lambda$1 = ProcfsStats.readBuffer$lambda$1();
                return readBuffer$lambda$1;
            }
        };
        readBuffer = new ThreadLocal() { // from class: a8.c
            @Override // java.lang.ThreadLocal
            protected /* synthetic */ Object initialValue() {
                return supplier.get();
            }
        };
    }

    public ProcfsStats(long j10, long j11) {
        this.totalTime = j10;
        this.rssPages = j11;
    }

    public static /* synthetic */ ProcfsStats copy$default(ProcfsStats procfsStats, long j10, long j11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = procfsStats.totalTime;
        }
        if ((i10 & 2) != 0) {
            j11 = procfsStats.rssPages;
        }
        return procfsStats.copy(j10, j11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final char[] readBuffer$lambda$1() {
        return new char[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final File statFile_delegate$lambda$0() {
        int myPid = Process.myPid();
        return new File("/proc/" + myPid + "/stat");
    }

    public final long component1() {
        return this.totalTime;
    }

    public final long component2() {
        return this.rssPages;
    }

    @NotNull
    public final ProcfsStats copy(long j10, long j11) {
        return new ProcfsStats(j10, j11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ProcfsStats) {
            ProcfsStats procfsStats = (ProcfsStats) obj;
            return this.totalTime == procfsStats.totalTime && this.rssPages == procfsStats.rssPages;
        }
        return false;
    }

    public final long getRssPages() {
        return this.rssPages;
    }

    public final long getTotalTime() {
        return this.totalTime;
    }

    public int hashCode() {
        return (Long.hashCode(this.totalTime) * 31) + Long.hashCode(this.rssPages);
    }

    @NotNull
    public String toString() {
        long j10 = this.totalTime;
        long j11 = this.rssPages;
        return "ProcfsStats(totalTime=" + j10 + ", rssPages=" + j11 + ")";
    }
}

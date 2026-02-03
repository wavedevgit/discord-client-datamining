package com.discord.crash_reporting.system_logs;

import android.annotation.SuppressLint;
import android.content.Context;
import android.util.Log;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.io.File;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.i;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.sequences.Sequence;
import kotlin.sequences.k;
import kotlin.text.Charsets;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import kotlin.text.m;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u001e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\bÀ\u0002\u0018\u00002\u00020\u0001:\u0001)B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0014\u001a\u00020\u0015J\u0010\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0014\u001a\u00020\u0015H\u0007J\u001c\u0010\u0018\u001a\u00020\u00172\u0014\u0010\u0019\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u001b\u0012\u0004\u0012\u00020\u00170\u001aJ\u0018\u0010\u0018\u001a\u0004\u0018\u00010\u001b2\f\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u00050\u001dH\u0002J(\u0010\u001e\u001a\u00020\u00172\u0006\u0010\u001f\u001a\u00020 2\f\u0010!\u001a\b\u0012\u0004\u0012\u00020\u00050\"2\b\u0010#\u001a\u0004\u0018\u00010\u000fH\u0002J,\u0010\u0013\u001a\u00020\u00172\b\u0010#\u001a\u0004\u0018\u00010\u000f2\u0018\u0010\u0019\u001a\u0014\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00050\"\u0012\u0004\u0012\u00020\u00170\u001aH\u0002J\u0010\u0010$\u001a\u00020\u00052\u0006\u0010%\u001a\u00020\u0005H\u0002J\u0010\u0010&\u001a\u00020\u00172\u0006\u0010'\u001a\u00020(H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u000e\u001a\u00020\u000fX\u0080\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0010\u0010\u0003\u001a\u0004\b\u0011\u0010\u0012¨\u0006*"}, d2 = {"Lcom/discord/crash_reporting/system_logs/SystemLogUtils;", "", "<init>", "()V", "LOGCAT_PATH", "", "debugPrintables", "Lcom/discord/crash_reporting/system_logs/DebugPrintableCollection;", "MAX_LOG_SIZE", "", "LIBDISCORD_VERSION_CATEGORY", "DEFAULT_TAG", "systemLogCapture", "Lcom/discord/crash_reporting/system_logs/SystemLogCapture;", "regexExtractTombstone", "Lkotlin/text/Regex;", "getRegexExtractTombstone$crash_reporting_release$annotations", "getRegexExtractTombstone$crash_reporting_release", "()Lkotlin/text/Regex;", "fetch", "context", "Landroid/content/Context;", "initSystemLogCapture", "", "fetchLastTombstone", "cb", "Lkotlin/Function1;", "Lcom/discord/crash_reporting/system_logs/SystemLogUtils$Tombstone;", "crashes", "", "processLogs", "reader", "Ljava/io/BufferedReader;", "output", "Ljava/util/LinkedList;", ViewProps.FILTER, "hashString", "input", "waitFor", "process", "Ljava/lang/Process;", "Tombstone", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSystemLogUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SystemLogUtils.kt\ncom/discord/crash_reporting/system_logs/SystemLogUtils\n+ 2 _Sequences.kt\nkotlin/sequences/SequencesKt___SequencesKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,234:1\n127#2,2:235\n461#3,6:237\n13472#4,2:243\n*S KotlinDebug\n*F\n+ 1 SystemLogUtils.kt\ncom/discord/crash_reporting/system_logs/SystemLogUtils\n*L\n118#1:235,2\n149#1:237,6\n206#1:243,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SystemLogUtils {
    @NotNull
    private static final String DEFAULT_TAG = "Discord";
    @NotNull
    public static final String LOGCAT_PATH = "/system/bin/logcat";
    private static final int MAX_LOG_SIZE = 2500000;
    @NotNull
    public static final SystemLogUtils INSTANCE = new SystemLogUtils();
    @NotNull
    private static final DebugPrintableCollection debugPrintables = new DebugPrintableCollection();
    @NotNull
    private static final SystemLogCapture systemLogCapture = new SystemLogCapture();
    @NotNull
    private static final String LIBDISCORD_VERSION_CATEGORY = "libdiscord_version";
    @NotNull
    private static final Regex regexExtractTombstone = new Regex("(?:^(?:[^\\s]+\\s+){4}F\\s+DEBUG\\s+:\\s(.+))|(^.+(\\[" + Regex.f35997e.c(LIBDISCORD_VERSION_CATEGORY) + "\\].+))");

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0016\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B9\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003¢\u0006\u0004\b\t\u0010\nJ\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003JG\u0010\u0018\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00032\b\b\u0002\u0010\b\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0019\u001a\u00020\u001a2\b\u0010\u001b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001c\u001a\u00020\u001dHÖ\u0001J\t\u0010\u001e\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\fR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\fR\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\fR\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\f¨\u0006\u001f"}, d2 = {"Lcom/discord/crash_reporting/system_logs/SystemLogUtils$Tombstone;", "", "text", "", "cause", "groupBy", "origin", "groupHash", "textHash", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getText", "()Ljava/lang/String;", "getCause", "getGroupBy", "getOrigin", "getGroupHash", "getTextHash", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "", "other", "hashCode", "", "toString", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Tombstone {
        private final String cause;
        @NotNull
        private final String groupBy;
        @NotNull
        private final String groupHash;
        @NotNull
        private final String origin;
        @NotNull
        private final String text;
        @NotNull
        private final String textHash;

        public Tombstone(@NotNull String text, String str, @NotNull String groupBy, @NotNull String origin, @NotNull String groupHash, @NotNull String textHash) {
            Intrinsics.checkNotNullParameter(text, "text");
            Intrinsics.checkNotNullParameter(groupBy, "groupBy");
            Intrinsics.checkNotNullParameter(origin, "origin");
            Intrinsics.checkNotNullParameter(groupHash, "groupHash");
            Intrinsics.checkNotNullParameter(textHash, "textHash");
            this.text = text;
            this.cause = str;
            this.groupBy = groupBy;
            this.origin = origin;
            this.groupHash = groupHash;
            this.textHash = textHash;
        }

        public static /* synthetic */ Tombstone copy$default(Tombstone tombstone, String str, String str2, String str3, String str4, String str5, String str6, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = tombstone.text;
            }
            if ((i10 & 2) != 0) {
                str2 = tombstone.cause;
            }
            if ((i10 & 4) != 0) {
                str3 = tombstone.groupBy;
            }
            if ((i10 & 8) != 0) {
                str4 = tombstone.origin;
            }
            if ((i10 & 16) != 0) {
                str5 = tombstone.groupHash;
            }
            if ((i10 & 32) != 0) {
                str6 = tombstone.textHash;
            }
            String str7 = str5;
            String str8 = str6;
            return tombstone.copy(str, str2, str3, str4, str7, str8);
        }

        @NotNull
        public final String component1() {
            return this.text;
        }

        public final String component2() {
            return this.cause;
        }

        @NotNull
        public final String component3() {
            return this.groupBy;
        }

        @NotNull
        public final String component4() {
            return this.origin;
        }

        @NotNull
        public final String component5() {
            return this.groupHash;
        }

        @NotNull
        public final String component6() {
            return this.textHash;
        }

        @NotNull
        public final Tombstone copy(@NotNull String text, String str, @NotNull String groupBy, @NotNull String origin, @NotNull String groupHash, @NotNull String textHash) {
            Intrinsics.checkNotNullParameter(text, "text");
            Intrinsics.checkNotNullParameter(groupBy, "groupBy");
            Intrinsics.checkNotNullParameter(origin, "origin");
            Intrinsics.checkNotNullParameter(groupHash, "groupHash");
            Intrinsics.checkNotNullParameter(textHash, "textHash");
            return new Tombstone(text, str, groupBy, origin, groupHash, textHash);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Tombstone) {
                Tombstone tombstone = (Tombstone) obj;
                return Intrinsics.areEqual(this.text, tombstone.text) && Intrinsics.areEqual(this.cause, tombstone.cause) && Intrinsics.areEqual(this.groupBy, tombstone.groupBy) && Intrinsics.areEqual(this.origin, tombstone.origin) && Intrinsics.areEqual(this.groupHash, tombstone.groupHash) && Intrinsics.areEqual(this.textHash, tombstone.textHash);
            }
            return false;
        }

        public final String getCause() {
            return this.cause;
        }

        @NotNull
        public final String getGroupBy() {
            return this.groupBy;
        }

        @NotNull
        public final String getGroupHash() {
            return this.groupHash;
        }

        @NotNull
        public final String getOrigin() {
            return this.origin;
        }

        @NotNull
        public final String getText() {
            return this.text;
        }

        @NotNull
        public final String getTextHash() {
            return this.textHash;
        }

        public int hashCode() {
            int hashCode = this.text.hashCode() * 31;
            String str = this.cause;
            return ((((((((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.groupBy.hashCode()) * 31) + this.origin.hashCode()) * 31) + this.groupHash.hashCode()) * 31) + this.textHash.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.text;
            String str2 = this.cause;
            String str3 = this.groupBy;
            String str4 = this.origin;
            String str5 = this.groupHash;
            String str6 = this.textHash;
            return "Tombstone(text=" + str + ", cause=" + str2 + ", groupBy=" + str3 + ", origin=" + str4 + ", groupHash=" + str5 + ", textHash=" + str6 + ")";
        }
    }

    private SystemLogUtils() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x0087, code lost:
        if (r0 != null) goto L4;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final kotlin.Unit fetch$lambda$6(java.util.LinkedList r5, kotlin.text.Regex r6, boolean r7, kotlin.jvm.functions.Function1 r8) {
        /*
            r0 = 0
            java.lang.ProcessBuilder r1 = new java.lang.ProcessBuilder     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            java.lang.String r2 = "/system/bin/logcat"
            java.lang.String r3 = "-d"
            java.lang.String[] r2 = new java.lang.String[]{r2, r3}     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            r1.<init>(r2)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            r2 = 1
            java.lang.ProcessBuilder r1 = r1.redirectErrorStream(r2)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            java.lang.Process r0 = r1.start()     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            com.discord.crash_reporting.system_logs.SystemLogUtils r1 = com.discord.crash_reporting.system_logs.SystemLogUtils.INSTANCE     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            r1.waitFor(r0)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            java.io.InputStream r2 = r0.getInputStream()     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            java.lang.String r3 = "getInputStream(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r3)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            java.nio.charset.Charset r3 = kotlin.text.Charsets.UTF_8     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            java.io.InputStreamReader r4 = new java.io.InputStreamReader     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            r4.<init>(r2, r3)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            java.io.BufferedReader r2 = new java.io.BufferedReader     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            r3 = 8192(0x2000, float:1.14794E-41)
            r2.<init>(r4, r3)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            r1.processLogs(r2, r5, r6)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
            r2.close()     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
        L3c:
            r0.destroy()
            goto L8a
        L40:
            r5 = move-exception
            goto L90
        L42:
            r6 = move-exception
            r6.printStackTrace()     // Catch: java.lang.Throwable -> L40
            if (r7 == 0) goto L87
            java.lang.StringBuilder r7 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L40
            r7.<init>()     // Catch: java.lang.Throwable -> L40
            java.lang.String r1 = "Exception getting system logs '"
            r7.append(r1)     // Catch: java.lang.Throwable -> L40
            r7.append(r6)     // Catch: java.lang.Throwable -> L40
            java.lang.String r1 = "'"
            r7.append(r1)     // Catch: java.lang.Throwable -> L40
            java.lang.String r7 = r7.toString()     // Catch: java.lang.Throwable -> L40
            r5.add(r7)     // Catch: java.lang.Throwable -> L40
            java.lang.StackTraceElement[] r6 = r6.getStackTrace()     // Catch: java.lang.Throwable -> L40
            java.lang.String r7 = "getStackTrace(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r6, r7)     // Catch: java.lang.Throwable -> L40
            int r7 = r6.length     // Catch: java.lang.Throwable -> L40
            r1 = 0
        L6c:
            if (r1 >= r7) goto L87
            r2 = r6[r1]     // Catch: java.lang.Throwable -> L40
            java.lang.StringBuilder r3 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L40
            r3.<init>()     // Catch: java.lang.Throwable -> L40
            java.lang.String r4 = "    "
            r3.append(r4)     // Catch: java.lang.Throwable -> L40
            r3.append(r2)     // Catch: java.lang.Throwable -> L40
            java.lang.String r2 = r3.toString()     // Catch: java.lang.Throwable -> L40
            r5.add(r2)     // Catch: java.lang.Throwable -> L40
            int r1 = r1 + 1
            goto L6c
        L87:
            if (r0 == 0) goto L8a
            goto L3c
        L8a:
            r8.invoke(r5)
            kotlin.Unit r5 = kotlin.Unit.f33074a
            return r5
        L90:
            if (r0 == 0) goto L95
            r0.destroy()
        L95:
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.crash_reporting.system_logs.SystemLogUtils.fetch$lambda$6(java.util.LinkedList, kotlin.text.Regex, boolean, kotlin.jvm.functions.Function1):kotlin.Unit");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit fetchLastTombstone$lambda$0(Function1 function1, LinkedList crashes) {
        Intrinsics.checkNotNullParameter(crashes, "crashes");
        function1.invoke(INSTANCE.fetchLastTombstone(crashes));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String fetchLastTombstone$lambda$2(Regex regex, MatchResult it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return regex.replace((CharSequence) it.b().get(1), "classesN.dex");
    }

    public static /* synthetic */ void getRegexExtractTombstone$crash_reporting_release$annotations() {
    }

    private final String hashString(String str) {
        MessageDigest messageDigest = MessageDigest.getInstance("SHA-1");
        byte[] bytes = str.getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
        byte[] digest = messageDigest.digest(bytes);
        Intrinsics.checkNotNull(digest);
        return i.s0(digest, "", null, null, 0, null, new Function1() { // from class: com.discord.crash_reporting.system_logs.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence hashString$lambda$7;
                hashString$lambda$7 = SystemLogUtils.hashString$lambda$7(((Byte) obj).byteValue());
                return hashString$lambda$7;
            }
        }, 30, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence hashString$lambda$7(byte b10) {
        String format = String.format("%02X", Arrays.copyOf(new Object[]{Byte.valueOf(b10)}, 1));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x0044, code lost:
        throw new java.util.NoSuchElementException("List contains no element matching the predicate.");
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void processLogs(java.io.BufferedReader r9, java.util.LinkedList<java.lang.String> r10, kotlin.text.Regex r11) {
        /*
            r8 = this;
            r0 = 0
            r1 = r0
        L2:
            r2 = 2500000(0x2625a0, float:3.503246E-39)
            java.lang.String r3 = r9.readLine()     // Catch: java.lang.Exception -> L3b
            if (r3 != 0) goto Ld
            goto L83
        Ld:
            r4 = 0
            r5 = 2
            if (r11 == 0) goto L45
            kotlin.text.MatchResult r3 = kotlin.text.Regex.d(r11, r3, r0, r5, r4)     // Catch: java.lang.Exception -> L3b
            if (r3 != 0) goto L18
            goto L2
        L18:
            java.util.List r3 = r3.b()     // Catch: java.lang.Exception -> L3b
            int r6 = r3.size()     // Catch: java.lang.Exception -> L3b
            java.util.ListIterator r3 = r3.listIterator(r6)     // Catch: java.lang.Exception -> L3b
        L24:
            boolean r6 = r3.hasPrevious()     // Catch: java.lang.Exception -> L3b
            if (r6 == 0) goto L3d
            java.lang.Object r6 = r3.previous()     // Catch: java.lang.Exception -> L3b
            r7 = r6
            java.lang.String r7 = (java.lang.String) r7     // Catch: java.lang.Exception -> L3b
            int r7 = r7.length()     // Catch: java.lang.Exception -> L3b
            if (r7 <= 0) goto L24
            r3 = r6
            java.lang.String r3 = (java.lang.String) r3     // Catch: java.lang.Exception -> L3b
            goto L45
        L3b:
            r9 = move-exception
            goto L6d
        L3d:
            java.util.NoSuchElementException r9 = new java.util.NoSuchElementException     // Catch: java.lang.Exception -> L3b
            java.lang.String r0 = "List contains no element matching the predicate."
            r9.<init>(r0)     // Catch: java.lang.Exception -> L3b
            throw r9     // Catch: java.lang.Exception -> L3b
        L45:
            boolean r6 = kotlin.text.StringsKt.k0(r3)     // Catch: java.lang.Exception -> L3b
            if (r6 != 0) goto L2
            java.lang.String r6 = "Accessing hidden method"
            boolean r4 = kotlin.text.StringsKt.V(r3, r6, r0, r5, r4)     // Catch: java.lang.Exception -> L3b
            if (r4 != 0) goto L2
            int r4 = r3.length()     // Catch: java.lang.Exception -> L3b
            int r4 = r4 + 1
            int r1 = r1 + r4
            r10.add(r3)     // Catch: java.lang.Exception -> L3b
            if (r1 <= r2) goto L2
            java.lang.Object r3 = r10.pop()     // Catch: java.lang.Exception -> L3b
            java.lang.String r3 = (java.lang.String) r3     // Catch: java.lang.Exception -> L3b
            int r2 = r3.length()     // Catch: java.lang.Exception -> L3b
            int r2 = r2 + (-1)
            int r1 = r1 - r2
            goto L2
        L6d:
            if (r11 != 0) goto L83
            java.lang.StringBuilder r11 = new java.lang.StringBuilder
            r11.<init>()
            java.lang.String r0 = "IOException: "
            r11.append(r0)
            r11.append(r9)
            java.lang.String r9 = r11.toString()
            r10.add(r9)
        L83:
            if (r1 <= r2) goto L8e
            java.lang.Object r9 = r10.pop()
            java.lang.String r9 = (java.lang.String) r9
            r9.length()
        L8e:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.crash_reporting.system_logs.SystemLogUtils.processLogs(java.io.BufferedReader, java.util.LinkedList, kotlin.text.Regex):void");
    }

    private final void waitFor(Process process) {
        long nanoTime = System.nanoTime() + TimeUnit.SECONDS.toNanos(15L);
        do {
            try {
                process.exitValue();
                return;
            } catch (IllegalThreadStateException unused) {
                Thread.sleep(100L);
                if (System.nanoTime() >= nanoTime) {
                }
            }
        } while (System.nanoTime() >= nanoTime);
    }

    @NotNull
    public final String fetch(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        StringBuilder sb2 = new StringBuilder();
        debugPrintables.debugPrint(context, sb2);
        systemLogCapture.appendOutput(sb2);
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public final void fetchLastTombstone(@NotNull final Function1<? super Tombstone, Unit> cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        fetch(regexExtractTombstone, new Function1() { // from class: com.discord.crash_reporting.system_logs.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit fetchLastTombstone$lambda$0;
                fetchLastTombstone$lambda$0 = SystemLogUtils.fetchLastTombstone$lambda$0(Function1.this, (LinkedList) obj);
                return fetchLastTombstone$lambda$0;
            }
        });
    }

    @NotNull
    public final Regex getRegexExtractTombstone$crash_reporting_release() {
        return regexExtractTombstone;
    }

    @SuppressLint({"LogNotTimber"})
    public final void initSystemLogCapture(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        String libdiscordVersion = DebugPrintableCollection.Companion.libdiscordVersion(context);
        Log.v("Discord", "[" + LIBDISCORD_VERSION_CATEGORY + "]: " + libdiscordVersion);
        systemLogCapture.startThread(context);
    }

    private final Tombstone fetchLastTombstone(Collection<String> collection) {
        String str;
        List b10;
        String str2 = null;
        if (collection.isEmpty()) {
            return null;
        }
        StringBuilder sb2 = new StringBuilder();
        String str3 = null;
        String str4 = null;
        for (String str5 : collection) {
            if (StringsKt.V(str5, LIBDISCORD_VERSION_CATEGORY, false, 2, null)) {
                str3 = str5;
            } else {
                if (StringsKt.V(str5, "*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***", false, 2, null)) {
                    StringsKt.m(sb2);
                    str4 = str3;
                }
                sb2.append(str5);
                sb2.append('\n');
            }
        }
        if (!StringsKt.k0(sb2)) {
            sb2.append('\n');
            sb2.append("Tombstone's libdiscord_version: ");
            if (str4 == null) {
                str4 = "Unknown libdiscord_version";
            }
            sb2.append(str4);
            sb2.append('\n');
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        if (StringsKt.k0(sb3)) {
            return null;
        }
        m mVar = m.f36058o;
        Regex regex = new Regex("^Cause: (.+)$", mVar);
        Regex regex2 = new Regex("^\\s+#\\d+ pc .+/(.+? .+?)\\+?[+)]", mVar);
        final Regex regex3 = new Regex("classes\\d+.dex");
        Sequence R = k.R(Regex.f(regex2, sb3, 0, 2, null), new Function1() { // from class: com.discord.crash_reporting.system_logs.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                String fetchLastTombstone$lambda$2;
                fetchLastTombstone$lambda$2 = SystemLogUtils.fetchLastTombstone$lambda$2(Regex.this, (MatchResult) obj);
                return fetchLastTombstone$lambda$2;
            }
        });
        HashSet e10 = x0.e("libc.so (abort", "libart.so (art::Runtime::Abort(char const*", "libbase.so (android::base::LogMessage::~LogMessage(");
        try {
        } catch (NoSuchElementException unused) {
            str = "Unknown";
        }
        for (Object obj : R) {
            if (!e10.contains((String) obj)) {
                str = (String) obj;
                String P = k.P(R, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, null, 62, null);
                MatchResult d10 = Regex.d(regex, sb3, 0, 2, null);
                if (d10 != null && (b10 = d10.b()) != null) {
                    str2 = (String) b10.get(1);
                }
                return new Tombstone(sb3, str2, P, str, hashString(P), hashString(sb3));
            }
        }
        throw new NoSuchElementException("Sequence contains no element matching the predicate.");
    }

    private final void fetch(final Regex regex, final Function1<? super LinkedList<String>, Unit> function1) {
        final LinkedList linkedList = new LinkedList();
        final boolean z10 = regex == null;
        if (!new File(LOGCAT_PATH).exists()) {
            if (z10) {
                linkedList.add("Unable to locate '/system/bin/logcat'");
            }
            function1.invoke(linkedList);
            return;
        }
        nr.a.b(false, false, null, null, 0, new Function0() { // from class: com.discord.crash_reporting.system_logs.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit fetch$lambda$6;
                fetch$lambda$6 = SystemLogUtils.fetch$lambda$6(linkedList, regex, z10, function1);
                return fetch$lambda$6;
            }
        }, 31, null);
    }
}

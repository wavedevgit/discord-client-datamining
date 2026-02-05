package com.discord.crash_reporting;

import android.content.Context;
import android.os.Looper;
import android.os.SystemClock;
import com.discord.crash_reporting.TelemetryRingSqliteStore;
import com.discord.crash_reporting.TelemetryRingTypes;
import com.discord.logging.Log;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000t\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010$\n\u0000\n\u0002\u0010 \n\u0002\b\u0011\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\"\u001a\u00020\u0007H\u0002J\u001a\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020&2\n\b\u0002\u0010'\u001a\u0004\u0018\u00010(JF\u0010)\u001a\u00020$2\u0006\u0010*\u001a\u00020\u00052\u0006\u0010+\u001a\u00020\f2\b\u0010,\u001a\u0004\u0018\u00010\u00052\u0016\u0010-\u001a\u0012\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010.2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u000500JE\u00101\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010.2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u0005002\u0006\u00102\u001a\u00020\f2\n\b\u0002\u00103\u001a\u0004\u0018\u00010(2\n\b\u0002\u00104\u001a\u0004\u0018\u00010\f¢\u0006\u0002\u00105J\u0006\u00106\u001a\u00020$J\u0010\u00107\u001a\u00020$2\u0006\u00108\u001a\u00020\u0011H\u0002J\b\u00109\u001a\u00020$H\u0002J\u0010\u0010:\u001a\u00020$2\u0006\u0010;\u001a\u00020\u000eH\u0002JC\u0010<\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010.2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u0005002\u0006\u00102\u001a\u00020\f2\b\u00103\u001a\u0004\u0018\u00010(2\b\u00104\u001a\u0004\u0018\u00010\fH\u0002¢\u0006\u0002\u00105J\b\u0010=\u001a\u00020$H\u0002J\u0016\u0010>\u001a\u00020\n2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u000500H\u0002J+\u0010?\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010.2\u0006\u00102\u001a\u00020\f2\b\u00104\u001a\u0004\u0018\u00010\fH\u0002¢\u0006\u0002\u0010@R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082T¢\u0006\u0002\n\u0000R\u0010\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0015\u001a\b\u0012\u0002\b\u0003\u0018\u00010\u0016X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u001a0\u0019X\u0082\u0004¢\u0006\u0002\n\u0000R\u001b\u0010\u001b\u001a\u00020\u001c8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u001f\u0010 \u001a\u0004\b\u001d\u0010\u001eR\u000e\u0010!\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006A"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRing;", "", "<init>", "()V", "TAG", "", "ENABLED", "", "IO_THREAD_NAME", "BATCH_MAX_ENTRIES", "", "BATCH_FLUSH_INTERVAL_MS", "", "store", "Lcom/discord/crash_reporting/TelemetryRingSqliteStore;", "pending", "Ljava/util/ArrayDeque;", "Lcom/discord/crash_reporting/TelemetryRingSqliteStore$EntryPayload;", "writeQueue", "lastFlushMs", "flushScheduled", "flushFuture", "Ljava/util/concurrent/ScheduledFuture;", "initLock", "ioThread", "Ljava/util/concurrent/atomic/AtomicReference;", "Ljava/lang/Thread;", "ioExecutor", "Ljava/util/concurrent/ScheduledExecutorService;", "getIoExecutor", "()Ljava/util/concurrent/ScheduledExecutorService;", "ioExecutor$delegate", "Lkotlin/Lazy;", "initScheduled", "isIoThread", "init", "", "context", "Landroid/content/Context;", "evictionBudget", "Lcom/discord/crash_reporting/TelemetryRingTypes$Budget;", "append", "key", "timestampMs", "message", "data", "", "channels", "", "snapshot", "beforeOffset", "budget", "ackedEndOffset", "(Ljava/util/List;JLcom/discord/crash_reporting/TelemetryRingTypes$Budget;Ljava/lang/Long;)Ljava/util/Map;", "clear", "enqueueWrite", "entry", "scheduleFlush", "flushWrites", "currentStore", "snapshotInternal", "flushPending", "channelMaskFor", "emptySnapshot", "(JLjava/lang/Long;)Ljava/util/Map;", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTelemetryRing.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TelemetryRing.kt\ncom/discord/crash_reporting/TelemetryRing\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,274:1\n1#2:275\n1#2:286\n1617#3,9:276\n1869#3:285\n1870#3:287\n1626#3:288\n1563#3:289\n1634#3,3:290\n1869#3,2:293\n1869#3,2:295\n*S KotlinDebug\n*F\n+ 1 TelemetryRing.kt\ncom/discord/crash_reporting/TelemetryRing\n*L\n211#1:286\n211#1:276,9\n211#1:285\n211#1:287\n211#1:288\n230#1:289\n230#1:290,3\n250#1:293,2\n257#1:295,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TelemetryRing {
    private static final long BATCH_FLUSH_INTERVAL_MS = 200;
    private static final int BATCH_MAX_ENTRIES = 200;
    public static final boolean ENABLED = true;
    @NotNull
    private static final String IO_THREAD_NAME = "TelemetryRing-IO";
    @NotNull
    private static final String TAG = "TelemetryRing";
    private static ScheduledFuture<?> flushFuture;
    private static boolean flushScheduled;
    private static volatile boolean initScheduled;
    private static long lastFlushMs;
    private static volatile TelemetryRingSqliteStore store;
    @NotNull
    public static final TelemetryRing INSTANCE = new TelemetryRing();
    @NotNull
    private static final ArrayDeque<TelemetryRingSqliteStore.EntryPayload> pending = new ArrayDeque<>();
    @NotNull
    private static final ArrayDeque<TelemetryRingSqliteStore.EntryPayload> writeQueue = new ArrayDeque<>();
    @NotNull
    private static final Object initLock = new Object();
    @NotNull
    private static final AtomicReference<Thread> ioThread = new AtomicReference<>();
    @NotNull
    private static final Lazy ioExecutor$delegate = or.l.a(new Function0() { // from class: com.discord.crash_reporting.n
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ScheduledExecutorService ioExecutor_delegate$lambda$2;
            ioExecutor_delegate$lambda$2 = TelemetryRing.ioExecutor_delegate$lambda$2();
            return ioExecutor_delegate$lambda$2;
        }
    });

    private TelemetryRing() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void append$lambda$5(TelemetryRingSqliteStore.EntryPayload entryPayload) {
        INSTANCE.enqueueWrite(entryPayload);
    }

    private final int channelMaskFor(List<String> list) {
        int bit;
        int i10 = 0;
        for (String str : list) {
            String upperCase = str.toUpperCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
            int hashCode = upperCase.hashCode();
            if (hashCode != -1986416409) {
                if (hashCode != -1852617761) {
                    if (hashCode == -1642955854 && upperCase.equals("ZOOMED")) {
                        bit = TelemetryRingTypes.Channel.ZOOMED.getBit();
                        i10 |= bit;
                    }
                } else if (upperCase.equals("SENTRY")) {
                    bit = TelemetryRingTypes.Channel.SENTRY.getBit();
                    i10 |= bit;
                }
            } else if (upperCase.equals("NORMAL")) {
                bit = TelemetryRingTypes.Channel.NORMAL.getBit();
                i10 |= bit;
            }
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void clear$lambda$9() {
        pending.clear();
        writeQueue.clear();
        flushScheduled = false;
        ScheduledFuture<?> scheduledFuture = flushFuture;
        if (scheduledFuture != null) {
            scheduledFuture.cancel(false);
        }
        flushFuture = null;
        TelemetryRingSqliteStore telemetryRingSqliteStore = store;
        if (telemetryRingSqliteStore != null) {
            telemetryRingSqliteStore.clear();
        }
        Log.i$default(Log.INSTANCE, TAG, "TelemetryRing cleared", (Throwable) null, 4, (Object) null);
    }

    private final Map<String, Object> emptySnapshot(long j10, Long l10) {
        long j11;
        Pair a10 = v.a("entries", CollectionsKt.l());
        Pair a11 = v.a("nextBeforeOffset", Long.valueOf(j10));
        if (l10 != null) {
            j11 = l10.longValue();
        } else {
            j11 = -1;
        }
        return o0.m(a10, a11, v.a("maxReturnedEndOffset", Long.valueOf(j11)), v.a("hasMore", Boolean.FALSE));
    }

    private final void enqueueWrite(TelemetryRingSqliteStore.EntryPayload entryPayload) {
        TelemetryRingSqliteStore telemetryRingSqliteStore = store;
        if (telemetryRingSqliteStore == null) {
            pending.addLast(entryPayload);
            return;
        }
        ArrayDeque<TelemetryRingSqliteStore.EntryPayload> arrayDeque = writeQueue;
        arrayDeque.addLast(entryPayload);
        long uptimeMillis = SystemClock.uptimeMillis();
        if (arrayDeque.size() < 200 && uptimeMillis - lastFlushMs < BATCH_FLUSH_INTERVAL_MS) {
            if (!flushScheduled) {
                scheduleFlush();
                return;
            }
            return;
        }
        flushWrites(telemetryRingSqliteStore);
    }

    private final void flushPending() {
        ArrayDeque<TelemetryRingSqliteStore.EntryPayload> arrayDeque = pending;
        if (!arrayDeque.isEmpty()) {
            for (TelemetryRingSqliteStore.EntryPayload entryPayload : arrayDeque) {
                writeQueue.addLast(entryPayload);
            }
            pending.clear();
            TelemetryRingSqliteStore telemetryRingSqliteStore = store;
            if (telemetryRingSqliteStore != null) {
                INSTANCE.flushWrites(telemetryRingSqliteStore);
            }
        }
    }

    private final void flushWrites(TelemetryRingSqliteStore telemetryRingSqliteStore) {
        ScheduledFuture<?> scheduledFuture = flushFuture;
        if (scheduledFuture != null) {
            scheduledFuture.cancel(false);
        }
        flushFuture = null;
        flushScheduled = false;
        ArrayDeque<TelemetryRingSqliteStore.EntryPayload> arrayDeque = writeQueue;
        if (arrayDeque.isEmpty()) {
            return;
        }
        List<TelemetryRingSqliteStore.EntryPayload> h12 = CollectionsKt.h1(arrayDeque);
        try {
            telemetryRingSqliteStore.append(h12);
            int size = h12.size();
            for (int i10 = 0; i10 < size; i10++) {
                writeQueue.removeFirst();
            }
            lastFlushMs = SystemClock.uptimeMillis();
        } catch (Throwable th2) {
            Log.INSTANCE.w(TAG, "TelemetryRing append failed; keeping entries queued", th2);
            scheduleFlush();
        }
    }

    private final ScheduledExecutorService getIoExecutor() {
        Object value = ioExecutor$delegate.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (ScheduledExecutorService) value;
    }

    public static /* synthetic */ void init$default(TelemetryRing telemetryRing, Context context, TelemetryRingTypes.Budget budget, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            budget = null;
        }
        telemetryRing.init(context, budget);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void init$lambda$4(Context context, TelemetryRingTypes.Budget budget) {
        try {
            if (store != null) {
                return;
            }
            Intrinsics.checkNotNull(context);
            store = new TelemetryRingSqliteStore(context, budget);
            Log.i$default(Log.INSTANCE, TAG, "TelemetryRing initialized", (Throwable) null, 4, (Object) null);
            INSTANCE.flushPending();
        } catch (Throwable th2) {
            try {
                Log.INSTANCE.w(TAG, "TelemetryRing initialization failed", th2);
            } finally {
                initScheduled = false;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ScheduledExecutorService ioExecutor_delegate$lambda$2() {
        return Executors.newSingleThreadScheduledExecutor(new ThreadFactory() { // from class: com.discord.crash_reporting.k
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(Runnable runnable) {
                Thread ioExecutor_delegate$lambda$2$lambda$1;
                ioExecutor_delegate$lambda$2$lambda$1 = TelemetryRing.ioExecutor_delegate$lambda$2$lambda$1(runnable);
                return ioExecutor_delegate$lambda$2$lambda$1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Thread ioExecutor_delegate$lambda$2$lambda$1(Runnable runnable) {
        Thread thread = new Thread(runnable, IO_THREAD_NAME);
        ioThread.set(thread);
        return thread;
    }

    private final boolean isIoThread() {
        if (Thread.currentThread() == ioThread.get()) {
            return true;
        }
        return false;
    }

    private final void scheduleFlush() {
        if (flushScheduled) {
            return;
        }
        flushScheduled = true;
        flushFuture = getIoExecutor().schedule(new Runnable() { // from class: com.discord.crash_reporting.o
            @Override // java.lang.Runnable
            public final void run() {
                TelemetryRing.scheduleFlush$lambda$11();
            }
        }, BATCH_FLUSH_INTERVAL_MS, TimeUnit.MILLISECONDS);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void scheduleFlush$lambda$11() {
        flushScheduled = false;
        TelemetryRingSqliteStore telemetryRingSqliteStore = store;
        if (telemetryRingSqliteStore != null) {
            INSTANCE.flushWrites(telemetryRingSqliteStore);
        }
    }

    public static /* synthetic */ Map snapshot$default(TelemetryRing telemetryRing, List list, long j10, TelemetryRingTypes.Budget budget, Long l10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            budget = null;
        }
        if ((i10 & 8) != 0) {
            l10 = null;
        }
        return telemetryRing.snapshot(list, j10, budget, l10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map snapshot$lambda$6(List list, long j10, TelemetryRingTypes.Budget budget, Long l10) {
        return INSTANCE.snapshotInternal(list, j10, budget, l10);
    }

    private final Map<String, Object> snapshotInternal(List<String> list, long j10, TelemetryRingTypes.Budget budget, Long l10) {
        TelemetryRingTypes.Channel channel;
        TelemetryRingSqliteStore telemetryRingSqliteStore = store;
        if (telemetryRingSqliteStore == null) {
            return emptySnapshot(j10, l10);
        }
        flushWrites(telemetryRingSqliteStore);
        ArrayList arrayList = new ArrayList();
        for (String str : list) {
            String upperCase = str.toUpperCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
            int hashCode = upperCase.hashCode();
            if (hashCode != -1986416409) {
                if (hashCode != -1852617761) {
                    if (hashCode == -1642955854 && upperCase.equals("ZOOMED")) {
                        channel = TelemetryRingTypes.Channel.ZOOMED;
                    }
                    channel = null;
                } else {
                    if (upperCase.equals("SENTRY")) {
                        channel = TelemetryRingTypes.Channel.SENTRY;
                    }
                    channel = null;
                }
            } else {
                if (upperCase.equals("NORMAL")) {
                    channel = TelemetryRingTypes.Channel.NORMAL;
                }
                channel = null;
            }
            if (channel != null) {
                arrayList.add(channel);
            }
        }
        Set<? extends TelemetryRingTypes.Channel> l12 = CollectionsKt.l1(arrayList);
        if (l12.isEmpty()) {
            return emptySnapshot(j10, l10);
        }
        TelemetryRingTypes.Snapshot snapshot = telemetryRingSqliteStore.snapshot(l12, j10, budget, l10);
        List<TelemetryRingTypes.LogEntry> entries = snapshot.getEntries();
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(entries, 10));
        for (TelemetryRingTypes.LogEntry logEntry : entries) {
            Map n10 = o0.n(v.a("key", logEntry.getKey()), v.a("timestamp", Long.valueOf(logEntry.getTimestampMs())));
            String message = logEntry.getMessage();
            if (message != null) {
                n10.put("message", message);
            }
            Map<String, Object> data = logEntry.getData();
            if (data != null) {
                n10.put("data", data);
            }
            arrayList2.add(n10);
        }
        return o0.m(v.a("entries", arrayList2), v.a("nextBeforeOffset", Long.valueOf(snapshot.getNextBeforeOffset())), v.a("maxReturnedEndOffset", Long.valueOf(snapshot.getMaxReturnedEndOffset())), v.a("hasMore", Boolean.valueOf(snapshot.getHasMore())));
    }

    public final void append(@NotNull String key, long j10, String str, Map<String, ? extends Object> map, @NotNull List<String> channels) {
        Map map2;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(channels, "channels");
        int channelMaskFor = channelMaskFor(channels);
        if (channelMaskFor == 0) {
            return;
        }
        if (map != null) {
            map2 = o0.w(map);
        } else {
            map2 = null;
        }
        final TelemetryRingSqliteStore.EntryPayload entryPayload = new TelemetryRingSqliteStore.EntryPayload(key, j10, str, map2, channelMaskFor);
        getIoExecutor().execute(new Runnable() { // from class: com.discord.crash_reporting.j
            @Override // java.lang.Runnable
            public final void run() {
                TelemetryRing.append$lambda$5(TelemetryRingSqliteStore.EntryPayload.this);
            }
        });
    }

    public final void clear() {
        getIoExecutor().execute(new Runnable() { // from class: com.discord.crash_reporting.m
            @Override // java.lang.Runnable
            public final void run() {
                TelemetryRing.clear$lambda$9();
            }
        });
    }

    public final void init(@NotNull Context context, final TelemetryRingTypes.Budget budget) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (store == null && !initScheduled) {
            synchronized (initLock) {
                if (store == null && !initScheduled) {
                    initScheduled = true;
                    Unit unit = Unit.f31988a;
                    final Context applicationContext = context.getApplicationContext();
                    if (budget == null) {
                        budget = TelemetryRingTypes.INSTANCE.defaultBudget();
                    }
                    getIoExecutor().execute(new Runnable() { // from class: com.discord.crash_reporting.i
                        @Override // java.lang.Runnable
                        public final void run() {
                            TelemetryRing.init$lambda$4(applicationContext, budget);
                        }
                    });
                }
            }
        }
    }

    @NotNull
    public final Map<String, Object> snapshot(@NotNull final List<String> channels, final long j10, final TelemetryRingTypes.Budget budget, final Long l10) {
        Map<String, Object> b10;
        Intrinsics.checkNotNullParameter(channels, "channels");
        if (Looper.getMainLooper() == Looper.myLooper()) {
            Log.w$default(Log.INSTANCE, TAG, "TelemetryRing.snapshot called on main thread; this may block UI.", (Throwable) null, 4, (Object) null);
        }
        if (isIoThread()) {
            return snapshotInternal(channels, j10, budget, l10);
        }
        Future submit = getIoExecutor().submit(new Callable() { // from class: com.discord.crash_reporting.l
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Map snapshot$lambda$6;
                snapshot$lambda$6 = TelemetryRing.snapshot$lambda$6(channels, j10, budget, l10);
                return snapshot$lambda$6;
            }
        });
        Intrinsics.checkNotNullExpressionValue(submit, "submit(...)");
        try {
            Result.a aVar = Result.f31985e;
            b10 = Result.b((Map) submit.get());
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f31985e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        Throwable e10 = Result.e(b10);
        if (e10 != null) {
            Log.INSTANCE.w(TAG, "TelemetryRing snapshot failed", e10);
            b10 = INSTANCE.emptySnapshot(j10, l10);
        }
        return (Map) b10;
    }
}

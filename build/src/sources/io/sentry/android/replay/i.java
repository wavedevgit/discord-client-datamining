package io.sentry.android.replay;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.k7;
import java.io.BufferedReader;
import java.io.Closeable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Lazy;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.sequences.Sequence;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements Closeable {

    /* renamed from: w  reason: collision with root package name */
    public static final a f29547w = new a(null);

    /* renamed from: x  reason: collision with root package name */
    public static final int f29548x = 8;

    /* renamed from: d  reason: collision with root package name */
    private final k7 f29549d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.protocol.x f29550e;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f29551i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.util.a f29552o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f29553p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f29554q;

    /* renamed from: r  reason: collision with root package name */
    private io.sentry.android.replay.video.c f29555r;

    /* renamed from: s  reason: collision with root package name */
    private final Lazy f29556s;

    /* renamed from: t  reason: collision with root package name */
    private final List f29557t;

    /* renamed from: u  reason: collision with root package name */
    private final LinkedHashMap f29558u;

    /* renamed from: v  reason: collision with root package name */
    private final Lazy f29559v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: io.sentry.android.replay.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0391a implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return lr.a.d(Long.valueOf(((j) obj).c()), Long.valueOf(((j) obj2).c()));
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return lr.a.d(Long.valueOf(((io.sentry.rrweb.b) obj).e()), Long.valueOf(((io.sentry.rrweb.b) obj2).e()));
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final boolean b(i iVar, File file, String str) {
            Intrinsics.checkNotNull(str);
            if (StringsKt.z(str, ".jpg", false, 2, null)) {
                File file2 = new File(file, str);
                Long t10 = StringsKt.t(tr.j.t(file2));
                if (t10 != null) {
                    i.x(iVar, file2, t10.longValue(), null, 4, null);
                }
            }
            return false;
        }

        /* JADX WARN: Code restructure failed: missing block: B:88:0x0203, code lost:
            if (r7 != null) goto L76;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final io.sentry.android.replay.d c(io.sentry.k7 r26, io.sentry.protocol.x r27, kotlin.jvm.functions.Function1 r28) {
            /*
                Method dump skipped, instructions count: 582
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.replay.i.a.c(io.sentry.k7, io.sentry.protocol.x, kotlin.jvm.functions.Function1):io.sentry.android.replay.d");
        }

        public final File d(k7 options, io.sentry.protocol.x replayId) {
            Intrinsics.checkNotNullParameter(options, "options");
            Intrinsics.checkNotNullParameter(replayId, "replayId");
            String cacheDirPath = options.getCacheDirPath();
            if (cacheDirPath != null && cacheDirPath.length() != 0) {
                String cacheDirPath2 = options.getCacheDirPath();
                Intrinsics.checkNotNull(cacheDirPath2);
                File file = new File(cacheDirPath2, "replay_" + replayId);
                file.mkdirs();
                return file;
            }
            options.getLogger().c(SentryLevel.WARNING, "SentryOptions.cacheDirPath is not set, session replay is no-op", new Object[0]);
            return null;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {
        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final File invoke() {
            if (i.this.D0() == null) {
                return null;
            }
            File file = new File(i.this.D0(), ".ongoing_segment");
            if (!file.exists()) {
                file.createNewFile();
            }
            return file;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f29561d = new c();

        c() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final CharSequence invoke(Map.Entry entry) {
            Intrinsics.checkNotNullParameter(entry, "<name for destructuring parameter 0>");
            return ((String) entry.getKey()) + '=' + ((String) entry.getValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function0 {
        d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final File invoke() {
            return i.f29547w.d(i.this.f29549d, i.this.f29550e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ long f29563d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ i f29564e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f29565i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(long j10, i iVar, Ref.ObjectRef objectRef) {
            super(1);
            this.f29563d = j10;
            this.f29564e = iVar;
            this.f29565i = objectRef;
        }

        /* JADX WARN: Type inference failed for: r5v2, types: [T, java.lang.String] */
        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(j it) {
            Intrinsics.checkNotNullParameter(it, "it");
            if (it.c() < this.f29563d) {
                this.f29564e.L(it.b());
                return Boolean.TRUE;
            }
            Ref.ObjectRef objectRef = this.f29565i;
            if (objectRef.element == 0) {
                objectRef.element = it.a();
            }
            return Boolean.FALSE;
        }
    }

    public i(k7 options, io.sentry.protocol.x replayId) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        this.f29549d = options;
        this.f29550e = replayId;
        this.f29551i = new AtomicBoolean(false);
        this.f29552o = new io.sentry.util.a();
        this.f29553p = new io.sentry.util.a();
        this.f29554q = new io.sentry.util.a();
        this.f29556s = ir.l.b(new d());
        this.f29557t = new ArrayList();
        this.f29558u = new LinkedHashMap();
        this.f29559v = ir.l.b(new b());
    }

    public static /* synthetic */ io.sentry.android.replay.c F(i iVar, long j10, long j11, int i10, int i11, int i12, int i13, int i14, File file, int i15, Object obj) {
        int i16;
        File file2;
        if ((i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            File D0 = iVar.D0();
            StringBuilder sb2 = new StringBuilder();
            i16 = i10;
            sb2.append(i16);
            sb2.append(".mp4");
            file2 = new File(D0, sb2.toString());
        } else {
            i16 = i10;
            file2 = file;
        }
        return iVar.E(j10, j11, i16, i11, i12, i13, i14, file2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void L(File file) {
        try {
            if (!file.delete()) {
                this.f29549d.getLogger().c(SentryLevel.ERROR, "Failed to delete replay frame: %s", file.getAbsolutePath());
            }
        } catch (Throwable th2) {
            this.f29549d.getLogger().a(SentryLevel.ERROR, th2, "Failed to delete replay frame: %s", file.getAbsolutePath());
        }
    }

    private final boolean N(j jVar) {
        if (jVar == null) {
            return false;
        }
        try {
            Bitmap decodeFile = BitmapFactory.decodeFile(jVar.b().getAbsolutePath());
            a1 a10 = this.f29552o.a();
            io.sentry.android.replay.video.c cVar = this.f29555r;
            if (cVar != null) {
                Intrinsics.checkNotNull(decodeFile);
                cVar.b(decodeFile);
                Unit unit = Unit.f33298a;
            }
            ur.a.a(a10, null);
            decodeFile.recycle();
            return true;
        } catch (Throwable th2) {
            this.f29549d.getLogger().b(SentryLevel.WARNING, "Unable to decode bitmap and encode it into a video, skipping frame", th2);
            return false;
        }
    }

    public static /* synthetic */ void x(i iVar, File file, long j10, String str, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            str = null;
        }
        iVar.n(file, j10, str);
    }

    public final List A0() {
        return this.f29557t;
    }

    public final void B(Bitmap bitmap, long j10, String str) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        if (D0() != null && !bitmap.isRecycled()) {
            File D0 = D0();
            if (D0 != null) {
                D0.mkdirs();
            }
            File D02 = D0();
            File file = new File(D02, j10 + ".jpg");
            file.createNewFile();
            synchronized (bitmap) {
                if (bitmap.isRecycled()) {
                    return;
                }
                FileOutputStream fileOutputStream = new FileOutputStream(file);
                bitmap.compress(Bitmap.CompressFormat.JPEG, this.f29549d.getSessionReplay().m().screenshotQuality, fileOutputStream);
                fileOutputStream.flush();
                Unit unit = Unit.f33298a;
                tr.c.a(fileOutputStream, null);
                n(file, j10, str);
            }
        }
    }

    public final File C0() {
        return (File) this.f29559v.getValue();
    }

    public final File D0() {
        return (File) this.f29556s.getValue();
    }

    public final io.sentry.android.replay.c E(long j10, long j11, int i10, int i11, int i12, int i13, int i14, File videoFile) {
        ArrayList arrayList;
        a1 a1Var;
        int i15;
        long j12;
        Intrinsics.checkNotNullParameter(videoFile, "videoFile");
        if (videoFile.exists() && videoFile.length() > 0) {
            videoFile.delete();
        }
        a1 a10 = this.f29554q.a();
        try {
            if (this.f29557t.isEmpty()) {
                arrayList = new ArrayList();
            } else {
                arrayList = CollectionsKt.j1(this.f29557t);
            }
            ur.a.a(a10, null);
            if (arrayList.isEmpty()) {
                this.f29549d.getLogger().c(SentryLevel.DEBUG, "No captured frames, skipping generating a video segment", new Object[0]);
                return null;
            }
            a1 a11 = this.f29552o.a();
            try {
                a1Var = a11;
                try {
                    io.sentry.android.replay.video.c cVar = new io.sentry.android.replay.video.c(this.f29549d, new io.sentry.android.replay.video.a(videoFile, i12, i11, i13, i14, null, 32, null), null, 4, null);
                    cVar.j();
                    ur.a.a(a1Var, null);
                    this.f29555r = cVar;
                    long j13 = 1000 / i13;
                    Object firstOrNull = CollectionsKt.firstOrNull(arrayList);
                    long j14 = j11 + j10;
                    kotlin.ranges.b t10 = kotlin.ranges.d.t(kotlin.ranges.d.w(j11, j14), j13);
                    long d10 = t10.d();
                    long e10 = t10.e();
                    long f10 = t10.f();
                    int i16 = (f10 > 0L ? 1 : (f10 == 0L ? 0 : -1));
                    if ((i16 > 0 && d10 <= e10) || (i16 < 0 && e10 <= d10)) {
                        long j15 = d10;
                        int i17 = 0;
                        Object obj = firstOrNull;
                        while (true) {
                            Iterator it = arrayList.iterator();
                            while (true) {
                                if (!it.hasNext()) {
                                    break;
                                }
                                j jVar = (j) it.next();
                                long j16 = j15 + j13;
                                long c10 = jVar.c();
                                if (j15 <= c10 && c10 <= j16) {
                                    obj = jVar;
                                    break;
                                } else if (jVar.c() > j16) {
                                    break;
                                }
                            }
                            boolean N = N((j) obj);
                            Object obj2 = obj;
                            if (N) {
                                i17++;
                                obj2 = obj;
                            } else if (obj != null) {
                                L(((j) obj).b());
                                a1 a12 = this.f29554q.a();
                                try {
                                    TypeIntrinsics.asMutableCollection(this.f29557t).remove(obj);
                                    ur.a.a(a12, null);
                                    arrayList.remove(obj);
                                    obj2 = null;
                                } finally {
                                }
                            }
                            if (j15 == e10) {
                                break;
                            }
                            j15 += f10;
                            obj = obj2;
                        }
                        i15 = i17;
                    } else {
                        i15 = 0;
                    }
                    if (i15 == 0) {
                        this.f29549d.getLogger().c(SentryLevel.DEBUG, "Generated a video with no frames, not capturing a replay segment", new Object[0]);
                        L(videoFile);
                        return null;
                    }
                    a1 a13 = this.f29552o.a();
                    try {
                        io.sentry.android.replay.video.c cVar2 = this.f29555r;
                        if (cVar2 != null) {
                            cVar2.i();
                        }
                        io.sentry.android.replay.video.c cVar3 = this.f29555r;
                        if (cVar3 != null) {
                            j12 = cVar3.c();
                        } else {
                            j12 = 0;
                        }
                        this.f29555r = null;
                        Unit unit = Unit.f33298a;
                        ur.a.a(a13, null);
                        F0(j14);
                        return new io.sentry.android.replay.c(videoFile, i15, j12);
                    } finally {
                    }
                } catch (Throwable th2) {
                    th = th2;
                    Throwable th3 = th;
                    try {
                        throw th3;
                    } catch (Throwable th4) {
                        ur.a.a(a1Var, th3);
                        throw th4;
                    }
                }
            } catch (Throwable th5) {
                th = th5;
                a1Var = a11;
            }
        } finally {
            try {
                throw th;
            } finally {
            }
        }
    }

    public final void E0(String key, String str) {
        File C0;
        File C02;
        Intrinsics.checkNotNullParameter(key, "key");
        a1 a10 = this.f29553p.a();
        try {
            if (this.f29551i.get()) {
                ur.a.a(a10, null);
                return;
            }
            File C03 = C0();
            if ((C03 == null || !C03.exists()) && (C0 = C0()) != null) {
                C0.createNewFile();
            }
            if (this.f29558u.isEmpty() && (C02 = C0()) != null) {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(C02), Charsets.UTF_8), 8192);
                Sequence<String> e10 = tr.r.e(bufferedReader);
                LinkedHashMap linkedHashMap = this.f29558u;
                for (String str2 : e10) {
                    List split$default = StringsKt.split$default(str2, new String[]{"="}, false, 2, 2, null);
                    Pair a11 = ir.v.a((String) split$default.get(0), (String) split$default.get(1));
                    linkedHashMap.put(a11.c(), a11.d());
                }
                tr.c.a(bufferedReader, null);
            }
            if (str == null) {
                this.f29558u.remove(key);
            } else {
                this.f29558u.put(key, str);
            }
            File C04 = C0();
            if (C04 != null) {
                Set entrySet = this.f29558u.entrySet();
                Intrinsics.checkNotNullExpressionValue(entrySet, "<get-entries>(...)");
                tr.j.l(C04, CollectionsKt.x0(entrySet, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, c.f29561d, 30, null), null, 2, null);
                Unit unit = Unit.f33298a;
            }
            ur.a.a(a10, null);
        } finally {
        }
    }

    public final String F0(long j10) {
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        a1 a10 = this.f29554q.a();
        try {
            CollectionsKt.J(this.f29557t, new e(j10, this, objectRef));
            ur.a.a(a10, null);
            return (String) objectRef.element;
        } finally {
        }
    }

    public final Long V() {
        Long l10;
        a1 a10 = this.f29554q.a();
        try {
            j jVar = (j) CollectionsKt.firstOrNull(this.f29557t);
            if (jVar != null) {
                l10 = Long.valueOf(jVar.c());
            } else {
                l10 = null;
            }
            ur.a.a(a10, null);
            return l10;
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                ur.a.a(a10, th2);
                throw th3;
            }
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a1 a10 = this.f29552o.a();
        try {
            io.sentry.android.replay.video.c cVar = this.f29555r;
            if (cVar != null) {
                cVar.i();
            }
            this.f29555r = null;
            Unit unit = Unit.f33298a;
            ur.a.a(a10, null);
            this.f29551i.set(true);
        } finally {
        }
    }

    public final void n(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        j jVar = new j(screenshot, j10, str);
        a1 a10 = this.f29554q.a();
        try {
            this.f29557t.add(jVar);
            Unit unit = Unit.f33298a;
            ur.a.a(a10, null);
        } finally {
        }
    }
}

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
    public static final a f27724w = new a(null);

    /* renamed from: x  reason: collision with root package name */
    public static final int f27725x = 8;

    /* renamed from: d  reason: collision with root package name */
    private final k7 f27726d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.protocol.x f27727e;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f27728i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.util.a f27729o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f27730p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f27731q;

    /* renamed from: r  reason: collision with root package name */
    private io.sentry.android.replay.video.c f27732r;

    /* renamed from: s  reason: collision with root package name */
    private final Lazy f27733s;

    /* renamed from: t  reason: collision with root package name */
    private final List f27734t;

    /* renamed from: u  reason: collision with root package name */
    private final LinkedHashMap f27735u;

    /* renamed from: v  reason: collision with root package name */
    private final Lazy f27736v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: io.sentry.android.replay.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0394a implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return tr.a.d(Long.valueOf(((j) obj).c()), Long.valueOf(((j) obj2).c()));
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return tr.a.d(Long.valueOf(((io.sentry.rrweb.b) obj).e()), Long.valueOf(((io.sentry.rrweb.b) obj2).e()));
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
                Long t10 = StringsKt.t(bs.j.t(file2));
                if (t10 != null) {
                    i.n(iVar, file2, t10.longValue(), null, 4, null);
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
            if (i.this.Y() == null) {
                return null;
            }
            File file = new File(i.this.Y(), ".ongoing_segment");
            if (!file.exists()) {
                file.createNewFile();
            }
            return file;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f27738d = new c();

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
            return i.f27724w.d(i.this.f27726d, i.this.f27727e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ long f27740d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ i f27741e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f27742i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(long j10, i iVar, Ref.ObjectRef objectRef) {
            super(1);
            this.f27740d = j10;
            this.f27741e = iVar;
            this.f27742i = objectRef;
        }

        /* JADX WARN: Type inference failed for: r5v2, types: [T, java.lang.String] */
        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(j it) {
            Intrinsics.checkNotNullParameter(it, "it");
            if (it.c() < this.f27740d) {
                this.f27741e.z(it.b());
                return Boolean.TRUE;
            }
            Ref.ObjectRef objectRef = this.f27742i;
            if (objectRef.element == 0) {
                objectRef.element = it.a();
            }
            return Boolean.FALSE;
        }
    }

    public i(k7 options, io.sentry.protocol.x replayId) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        this.f27726d = options;
        this.f27727e = replayId;
        this.f27728i = new AtomicBoolean(false);
        this.f27729o = new io.sentry.util.a();
        this.f27730p = new io.sentry.util.a();
        this.f27731q = new io.sentry.util.a();
        this.f27733s = qr.l.a(new d());
        this.f27734t = new ArrayList();
        this.f27735u = new LinkedHashMap();
        this.f27736v = qr.l.a(new b());
    }

    private final boolean C(j jVar) {
        if (jVar == null) {
            return false;
        }
        try {
            Bitmap decodeFile = BitmapFactory.decodeFile(jVar.b().getAbsolutePath());
            a1 a10 = this.f27729o.a();
            io.sentry.android.replay.video.c cVar = this.f27732r;
            if (cVar != null) {
                Intrinsics.checkNotNull(decodeFile);
                cVar.b(decodeFile);
                Unit unit = Unit.f32056a;
            }
            cs.a.a(a10, null);
            decodeFile.recycle();
            return true;
        } catch (Throwable th2) {
            this.f27726d.getLogger().b(SentryLevel.WARNING, "Unable to decode bitmap and encode it into a video, skipping frame", th2);
            return false;
        }
    }

    public static /* synthetic */ void n(i iVar, File file, long j10, String str, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            str = null;
        }
        iVar.m(file, j10, str);
    }

    public static /* synthetic */ io.sentry.android.replay.c y(i iVar, long j10, long j11, int i10, int i11, int i12, int i13, int i14, File file, int i15, Object obj) {
        int i16;
        File file2;
        if ((i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            File Y = iVar.Y();
            StringBuilder sb2 = new StringBuilder();
            i16 = i10;
            sb2.append(i16);
            sb2.append(".mp4");
            file2 = new File(Y, sb2.toString());
        } else {
            i16 = i10;
            file2 = file;
        }
        return iVar.s(j10, j11, i16, i11, i12, i13, i14, file2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void z(File file) {
        try {
            if (!file.delete()) {
                this.f27726d.getLogger().c(SentryLevel.ERROR, "Failed to delete replay frame: %s", file.getAbsolutePath());
            }
        } catch (Throwable th2) {
            this.f27726d.getLogger().a(SentryLevel.ERROR, th2, "Failed to delete replay frame: %s", file.getAbsolutePath());
        }
    }

    public final void E0(String key, String str) {
        File P;
        File P2;
        Intrinsics.checkNotNullParameter(key, "key");
        a1 a10 = this.f27730p.a();
        try {
            if (this.f27728i.get()) {
                cs.a.a(a10, null);
                return;
            }
            File P3 = P();
            if ((P3 == null || !P3.exists()) && (P = P()) != null) {
                P.createNewFile();
            }
            if (this.f27735u.isEmpty() && (P2 = P()) != null) {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(P2), Charsets.UTF_8), 8192);
                Sequence<String> e10 = bs.r.e(bufferedReader);
                LinkedHashMap linkedHashMap = this.f27735u;
                for (String str2 : e10) {
                    List split$default = StringsKt.split$default(str2, new String[]{"="}, false, 2, 2, null);
                    Pair a11 = qr.v.a((String) split$default.get(0), (String) split$default.get(1));
                    linkedHashMap.put(a11.c(), a11.d());
                }
                bs.c.a(bufferedReader, null);
            }
            if (str == null) {
                this.f27735u.remove(key);
            } else {
                this.f27735u.put(key, str);
            }
            File P4 = P();
            if (P4 != null) {
                Set entrySet = this.f27735u.entrySet();
                Intrinsics.checkNotNullExpressionValue(entrySet, "<get-entries>(...)");
                bs.j.l(P4, CollectionsKt.x0(entrySet, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, c.f27738d, 30, null), null, 2, null);
                Unit unit = Unit.f32056a;
            }
            cs.a.a(a10, null);
        } finally {
        }
    }

    public final String F0(long j10) {
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        a1 a10 = this.f27731q.a();
        try {
            CollectionsKt.J(this.f27734t, new e(j10, this, objectRef));
            cs.a.a(a10, null);
            return (String) objectRef.element;
        } finally {
        }
    }

    public final Long I() {
        Long l10;
        a1 a10 = this.f27731q.a();
        try {
            j jVar = (j) CollectionsKt.firstOrNull(this.f27734t);
            if (jVar != null) {
                l10 = Long.valueOf(jVar.c());
            } else {
                l10 = null;
            }
            cs.a.a(a10, null);
            return l10;
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                cs.a.a(a10, th2);
                throw th3;
            }
        }
    }

    public final List J() {
        return this.f27734t;
    }

    public final File P() {
        return (File) this.f27736v.getValue();
    }

    public final File Y() {
        return (File) this.f27733s.getValue();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a1 a10 = this.f27729o.a();
        try {
            io.sentry.android.replay.video.c cVar = this.f27732r;
            if (cVar != null) {
                cVar.i();
            }
            this.f27732r = null;
            Unit unit = Unit.f32056a;
            cs.a.a(a10, null);
            this.f27728i.set(true);
        } finally {
        }
    }

    public final void m(File screenshot, long j10, String str) {
        Intrinsics.checkNotNullParameter(screenshot, "screenshot");
        j jVar = new j(screenshot, j10, str);
        a1 a10 = this.f27731q.a();
        try {
            this.f27734t.add(jVar);
            Unit unit = Unit.f32056a;
            cs.a.a(a10, null);
        } finally {
        }
    }

    public final void p(Bitmap bitmap, long j10, String str) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        if (Y() != null && !bitmap.isRecycled()) {
            File Y = Y();
            if (Y != null) {
                Y.mkdirs();
            }
            File Y2 = Y();
            File file = new File(Y2, j10 + ".jpg");
            file.createNewFile();
            synchronized (bitmap) {
                if (bitmap.isRecycled()) {
                    return;
                }
                FileOutputStream fileOutputStream = new FileOutputStream(file);
                bitmap.compress(Bitmap.CompressFormat.JPEG, this.f27726d.getSessionReplay().m().screenshotQuality, fileOutputStream);
                fileOutputStream.flush();
                Unit unit = Unit.f32056a;
                bs.c.a(fileOutputStream, null);
                m(file, j10, str);
            }
        }
    }

    public final io.sentry.android.replay.c s(long j10, long j11, int i10, int i11, int i12, int i13, int i14, File videoFile) {
        ArrayList arrayList;
        a1 a1Var;
        int i15;
        long j12;
        Intrinsics.checkNotNullParameter(videoFile, "videoFile");
        if (videoFile.exists() && videoFile.length() > 0) {
            videoFile.delete();
        }
        a1 a10 = this.f27731q.a();
        try {
            if (this.f27734t.isEmpty()) {
                arrayList = new ArrayList();
            } else {
                arrayList = CollectionsKt.j1(this.f27734t);
            }
            cs.a.a(a10, null);
            if (arrayList.isEmpty()) {
                this.f27726d.getLogger().c(SentryLevel.DEBUG, "No captured frames, skipping generating a video segment", new Object[0]);
                return null;
            }
            a1 a11 = this.f27729o.a();
            try {
                a1Var = a11;
                try {
                    io.sentry.android.replay.video.c cVar = new io.sentry.android.replay.video.c(this.f27726d, new io.sentry.android.replay.video.a(videoFile, i12, i11, i13, i14, null, 32, null), null, 4, null);
                    cVar.j();
                    cs.a.a(a1Var, null);
                    this.f27732r = cVar;
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
                            boolean C = C((j) obj);
                            Object obj2 = obj;
                            if (C) {
                                i17++;
                                obj2 = obj;
                            } else if (obj != null) {
                                z(((j) obj).b());
                                a1 a12 = this.f27731q.a();
                                try {
                                    TypeIntrinsics.asMutableCollection(this.f27734t).remove(obj);
                                    cs.a.a(a12, null);
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
                        this.f27726d.getLogger().c(SentryLevel.DEBUG, "Generated a video with no frames, not capturing a replay segment", new Object[0]);
                        z(videoFile);
                        return null;
                    }
                    a1 a13 = this.f27729o.a();
                    try {
                        io.sentry.android.replay.video.c cVar2 = this.f27732r;
                        if (cVar2 != null) {
                            cVar2.i();
                        }
                        io.sentry.android.replay.video.c cVar3 = this.f27732r;
                        if (cVar3 != null) {
                            j12 = cVar3.c();
                        } else {
                            j12 = 0;
                        }
                        this.f27732r = null;
                        Unit unit = Unit.f32056a;
                        cs.a.a(a13, null);
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
                        cs.a.a(a1Var, th3);
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
}

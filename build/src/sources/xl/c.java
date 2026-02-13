package xl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import android.view.Surface;
import java.nio.ByteBuffer;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements i {

    /* renamed from: a  reason: collision with root package name */
    private final ql.b f55463a;

    /* renamed from: b  reason: collision with root package name */
    private final List f55464b;

    /* renamed from: c  reason: collision with root package name */
    private MediaFormat f55465c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat f55466d;

    /* renamed from: e  reason: collision with root package name */
    private double f55467e;

    /* renamed from: f  reason: collision with root package name */
    private int f55468f;

    /* renamed from: g  reason: collision with root package name */
    private int f55469g;

    /* renamed from: h  reason: collision with root package name */
    private int f55470h;

    /* renamed from: i  reason: collision with root package name */
    private int f55471i;

    /* renamed from: j  reason: collision with root package name */
    private double f55472j;

    /* renamed from: k  reason: collision with root package name */
    private final zl.a f55473k;

    /* renamed from: l  reason: collision with root package name */
    private final b f55474l;

    /* renamed from: m  reason: collision with root package name */
    private xl.a f55475m;

    /* renamed from: n  reason: collision with root package name */
    private AtomicBoolean f55476n;

    /* renamed from: o  reason: collision with root package name */
    private final LinkedBlockingDeque f55477o;

    /* renamed from: p  reason: collision with root package name */
    private final a f55478p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a extends Thread {
        public a() {
        }

        private final void a(int i10, ql.c cVar) {
            ByteBuffer byteBuffer;
            boolean z10;
            ql.c a10 = c.this.f55463a.a(i10);
            if (a10 != null) {
                c cVar2 = c.this;
                if (a10.f46024b != null && (byteBuffer = cVar.f46024b) != null) {
                    MediaCodec.BufferInfo bufferInfo = a10.f46025c;
                    bufferInfo.offset = 0;
                    MediaCodec.BufferInfo bufferInfo2 = cVar.f46025c;
                    bufferInfo.flags = bufferInfo2.flags;
                    bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs + ((long) ((byteBuffer.position() / (cVar2.f55469g * 2)) * cVar2.f55467e));
                    if (a10.f46024b.limit() >= cVar.f46024b.remaining()) {
                        a10.f46025c.size = cVar.f46024b.remaining();
                        z10 = true;
                    } else {
                        a10.f46025c.size = a10.f46024b.limit();
                        a10.f46025c.flags &= -5;
                        z10 = false;
                    }
                    int i11 = a10.f46025c.size;
                    for (int i12 = 0; i12 < i11; i12++) {
                        a10.f46024b.put(cVar.f46024b.get());
                    }
                    if (z10) {
                        cVar2.f55477o.removeFirst();
                        zl.a aVar = cVar2.f55473k;
                        ByteBuffer byteBuffer2 = cVar.f46024b;
                        Intrinsics.checkNotNullExpressionValue(byteBuffer2, "inputFrame.buffer");
                        aVar.d(byteBuffer2);
                    }
                    cVar2.f55463a.d(a10);
                }
            }
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            while (!c.this.f55476n.get()) {
                ql.c cVar = (ql.c) c.this.f55477o.peekFirst();
                if (cVar != null) {
                    int c10 = c.this.f55463a.c(0L);
                    if (c10 >= 0) {
                        a(c10, cVar);
                    } else if (c10 != -1) {
                        Log.e("AudioRenderer", "Unhandled value " + c10 + " when receiving decoded input frame");
                    }
                }
            }
            c.this.f55477o.clear();
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ql.b encoder) {
        this(encoder, null, 2, null);
        Intrinsics.checkNotNullParameter(encoder, "encoder");
    }

    @Override // xl.i
    public boolean a() {
        return !this.f55464b.isEmpty();
    }

    @Override // xl.i
    public void b(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        c(mediaFormat, mediaFormat2);
        this.f55476n.set(false);
        this.f55478p.start();
        Iterator it = this.f55464b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    @Override // xl.i
    public void c(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        Number number;
        Number number2;
        Number number3;
        Number d10;
        Integer num = -1;
        if (mediaFormat == null || (number = zl.e.f57094a.a(mediaFormat, num)) == null) {
            number = num;
        }
        if (mediaFormat2 == null || (number2 = zl.e.f57094a.a(mediaFormat2, num)) == null) {
            number2 = num;
        }
        if (mediaFormat == null || (number3 = zl.e.f57094a.d(mediaFormat, num)) == null) {
            number3 = num;
        }
        if (mediaFormat2 != null && (d10 = zl.e.f57094a.d(mediaFormat2, num)) != null) {
            num = d10;
        }
        int i10 = this.f55468f;
        if ((number instanceof Integer) && i10 == number.intValue()) {
            int i11 = this.f55469g;
            if ((number2 instanceof Integer) && i11 == number2.intValue()) {
                int i12 = this.f55470h;
                if ((number3 instanceof Integer) && i12 == number3.intValue()) {
                    int i13 = this.f55471i;
                    if ((num instanceof Integer) && i13 == num.intValue()) {
                        return;
                    }
                }
            }
        }
        xl.a aVar = this.f55475m;
        if (aVar != null) {
            aVar.release();
        }
        this.f55475m = this.f55474l.a(mediaFormat, mediaFormat2);
        this.f55468f = number.intValue();
        this.f55469g = number2.intValue();
        this.f55470h = number3.intValue();
        this.f55471i = num.intValue();
        this.f55467e = 1000000.0d / num.doubleValue();
        this.f55472j = num.doubleValue() / number3.doubleValue();
        this.f55465c = mediaFormat;
        this.f55466d = mediaFormat2;
    }

    @Override // xl.i
    public void d(ql.c cVar, long j10) {
        if (!this.f55476n.get() && cVar != null) {
            ql.c cVar2 = new ql.c(cVar.f46023a, this.f55473k.c(((int) Math.ceil((cVar.f46025c.size / (this.f55468f * 2)) * this.f55472j)) * this.f55469g * 2), new MediaCodec.BufferInfo());
            xl.a aVar = this.f55475m;
            if (aVar != null) {
                aVar.a(cVar, cVar2);
            }
            Iterator it = this.f55464b.iterator();
            if (!it.hasNext()) {
                this.f55477o.add(cVar2);
            } else {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // xl.i
    public void release() {
        this.f55476n.set(true);
        xl.a aVar = this.f55475m;
        if (aVar != null) {
            aVar.release();
        }
        this.f55473k.b();
        Iterator it = this.f55464b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public c(ql.b encoder, List list) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        this.f55463a = encoder;
        this.f55464b = list == null ? CollectionsKt.l() : list;
        this.f55468f = -1;
        this.f55469g = -1;
        this.f55470h = -1;
        this.f55471i = -1;
        this.f55472j = 1.0d;
        this.f55473k = new zl.a(true);
        this.f55474l = new b();
        this.f55476n = new AtomicBoolean(false);
        this.f55477o = new LinkedBlockingDeque();
        this.f55478p = new a();
    }

    public /* synthetic */ c(ql.b bVar, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? null : list);
    }
}

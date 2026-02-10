package vl;

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
    private final ol.b f52498a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52499b;

    /* renamed from: c  reason: collision with root package name */
    private MediaFormat f52500c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat f52501d;

    /* renamed from: e  reason: collision with root package name */
    private double f52502e;

    /* renamed from: f  reason: collision with root package name */
    private int f52503f;

    /* renamed from: g  reason: collision with root package name */
    private int f52504g;

    /* renamed from: h  reason: collision with root package name */
    private int f52505h;

    /* renamed from: i  reason: collision with root package name */
    private int f52506i;

    /* renamed from: j  reason: collision with root package name */
    private double f52507j;

    /* renamed from: k  reason: collision with root package name */
    private final xl.a f52508k;

    /* renamed from: l  reason: collision with root package name */
    private final b f52509l;

    /* renamed from: m  reason: collision with root package name */
    private vl.a f52510m;

    /* renamed from: n  reason: collision with root package name */
    private AtomicBoolean f52511n;

    /* renamed from: o  reason: collision with root package name */
    private final LinkedBlockingDeque f52512o;

    /* renamed from: p  reason: collision with root package name */
    private final a f52513p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a extends Thread {
        public a() {
        }

        private final void a(int i10, ol.c cVar) {
            ByteBuffer byteBuffer;
            boolean z10;
            ol.c a10 = c.this.f52498a.a(i10);
            if (a10 != null) {
                c cVar2 = c.this;
                if (a10.f42369b != null && (byteBuffer = cVar.f42369b) != null) {
                    MediaCodec.BufferInfo bufferInfo = a10.f42370c;
                    bufferInfo.offset = 0;
                    MediaCodec.BufferInfo bufferInfo2 = cVar.f42370c;
                    bufferInfo.flags = bufferInfo2.flags;
                    bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs + ((long) ((byteBuffer.position() / (cVar2.f52504g * 2)) * cVar2.f52502e));
                    if (a10.f42369b.limit() >= cVar.f42369b.remaining()) {
                        a10.f42370c.size = cVar.f42369b.remaining();
                        z10 = true;
                    } else {
                        a10.f42370c.size = a10.f42369b.limit();
                        a10.f42370c.flags &= -5;
                        z10 = false;
                    }
                    int i11 = a10.f42370c.size;
                    for (int i12 = 0; i12 < i11; i12++) {
                        a10.f42369b.put(cVar.f42369b.get());
                    }
                    if (z10) {
                        cVar2.f52512o.removeFirst();
                        xl.a aVar = cVar2.f52508k;
                        ByteBuffer byteBuffer2 = cVar.f42369b;
                        Intrinsics.checkNotNullExpressionValue(byteBuffer2, "inputFrame.buffer");
                        aVar.d(byteBuffer2);
                    }
                    cVar2.f52498a.e(a10);
                }
            }
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            while (!c.this.f52511n.get()) {
                ol.c cVar = (ol.c) c.this.f52512o.peekFirst();
                if (cVar != null) {
                    int c10 = c.this.f52498a.c(0L);
                    if (c10 >= 0) {
                        a(c10, cVar);
                    } else if (c10 != -1) {
                        Log.e("AudioRenderer", "Unhandled value " + c10 + " when receiving decoded input frame");
                    }
                }
            }
            c.this.f52512o.clear();
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ol.b encoder) {
        this(encoder, null, 2, null);
        Intrinsics.checkNotNullParameter(encoder, "encoder");
    }

    @Override // vl.i
    public boolean a() {
        return !this.f52499b.isEmpty();
    }

    @Override // vl.i
    public void b(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        d(mediaFormat, mediaFormat2);
        this.f52511n.set(false);
        this.f52513p.start();
        Iterator it = this.f52499b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    @Override // vl.i
    public void c(ol.c cVar, long j10) {
        if (!this.f52511n.get() && cVar != null) {
            ol.c cVar2 = new ol.c(cVar.f42368a, this.f52508k.c(((int) Math.ceil((cVar.f42370c.size / (this.f52503f * 2)) * this.f52507j)) * this.f52504g * 2), new MediaCodec.BufferInfo());
            vl.a aVar = this.f52510m;
            if (aVar != null) {
                aVar.a(cVar, cVar2);
            }
            Iterator it = this.f52499b.iterator();
            if (!it.hasNext()) {
                this.f52512o.add(cVar2);
            } else {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // vl.i
    public void d(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        Number number;
        Number number2;
        Number number3;
        Number d10;
        Integer num = -1;
        if (mediaFormat == null || (number = xl.e.f55079a.a(mediaFormat, num)) == null) {
            number = num;
        }
        if (mediaFormat2 == null || (number2 = xl.e.f55079a.a(mediaFormat2, num)) == null) {
            number2 = num;
        }
        if (mediaFormat == null || (number3 = xl.e.f55079a.d(mediaFormat, num)) == null) {
            number3 = num;
        }
        if (mediaFormat2 != null && (d10 = xl.e.f55079a.d(mediaFormat2, num)) != null) {
            num = d10;
        }
        int i10 = this.f52503f;
        if ((number instanceof Integer) && i10 == number.intValue()) {
            int i11 = this.f52504g;
            if ((number2 instanceof Integer) && i11 == number2.intValue()) {
                int i12 = this.f52505h;
                if ((number3 instanceof Integer) && i12 == number3.intValue()) {
                    int i13 = this.f52506i;
                    if ((num instanceof Integer) && i13 == num.intValue()) {
                        return;
                    }
                }
            }
        }
        vl.a aVar = this.f52510m;
        if (aVar != null) {
            aVar.release();
        }
        this.f52510m = this.f52509l.a(mediaFormat, mediaFormat2);
        this.f52503f = number.intValue();
        this.f52504g = number2.intValue();
        this.f52505h = number3.intValue();
        this.f52506i = num.intValue();
        this.f52502e = 1000000.0d / num.doubleValue();
        this.f52507j = num.doubleValue() / number3.doubleValue();
        this.f52500c = mediaFormat;
        this.f52501d = mediaFormat2;
    }

    @Override // vl.i
    public void release() {
        this.f52511n.set(true);
        vl.a aVar = this.f52510m;
        if (aVar != null) {
            aVar.release();
        }
        this.f52508k.b();
        Iterator it = this.f52499b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public c(ol.b encoder, List list) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        this.f52498a = encoder;
        this.f52499b = list == null ? CollectionsKt.l() : list;
        this.f52503f = -1;
        this.f52504g = -1;
        this.f52505h = -1;
        this.f52506i = -1;
        this.f52507j = 1.0d;
        this.f52508k = new xl.a(true);
        this.f52509l = new b();
        this.f52511n = new AtomicBoolean(false);
        this.f52512o = new LinkedBlockingDeque();
        this.f52513p = new a();
    }

    public /* synthetic */ c(ol.b bVar, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? null : list);
    }
}

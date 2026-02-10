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
    private final ql.b f54894a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54895b;

    /* renamed from: c  reason: collision with root package name */
    private MediaFormat f54896c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat f54897d;

    /* renamed from: e  reason: collision with root package name */
    private double f54898e;

    /* renamed from: f  reason: collision with root package name */
    private int f54899f;

    /* renamed from: g  reason: collision with root package name */
    private int f54900g;

    /* renamed from: h  reason: collision with root package name */
    private int f54901h;

    /* renamed from: i  reason: collision with root package name */
    private int f54902i;

    /* renamed from: j  reason: collision with root package name */
    private double f54903j;

    /* renamed from: k  reason: collision with root package name */
    private final zl.a f54904k;

    /* renamed from: l  reason: collision with root package name */
    private final b f54905l;

    /* renamed from: m  reason: collision with root package name */
    private xl.a f54906m;

    /* renamed from: n  reason: collision with root package name */
    private AtomicBoolean f54907n;

    /* renamed from: o  reason: collision with root package name */
    private final LinkedBlockingDeque f54908o;

    /* renamed from: p  reason: collision with root package name */
    private final a f54909p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a extends Thread {
        public a() {
        }

        private final void a(int i10, ql.c cVar) {
            ByteBuffer byteBuffer;
            boolean z10;
            ql.c a10 = c.this.f54894a.a(i10);
            if (a10 != null) {
                c cVar2 = c.this;
                if (a10.f45455b != null && (byteBuffer = cVar.f45455b) != null) {
                    MediaCodec.BufferInfo bufferInfo = a10.f45456c;
                    bufferInfo.offset = 0;
                    MediaCodec.BufferInfo bufferInfo2 = cVar.f45456c;
                    bufferInfo.flags = bufferInfo2.flags;
                    bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs + ((long) ((byteBuffer.position() / (cVar2.f54900g * 2)) * cVar2.f54898e));
                    if (a10.f45455b.limit() >= cVar.f45455b.remaining()) {
                        a10.f45456c.size = cVar.f45455b.remaining();
                        z10 = true;
                    } else {
                        a10.f45456c.size = a10.f45455b.limit();
                        a10.f45456c.flags &= -5;
                        z10 = false;
                    }
                    int i11 = a10.f45456c.size;
                    for (int i12 = 0; i12 < i11; i12++) {
                        a10.f45455b.put(cVar.f45455b.get());
                    }
                    if (z10) {
                        cVar2.f54908o.removeFirst();
                        zl.a aVar = cVar2.f54904k;
                        ByteBuffer byteBuffer2 = cVar.f45455b;
                        Intrinsics.checkNotNullExpressionValue(byteBuffer2, "inputFrame.buffer");
                        aVar.d(byteBuffer2);
                    }
                    cVar2.f54894a.d(a10);
                }
            }
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            while (!c.this.f54907n.get()) {
                ql.c cVar = (ql.c) c.this.f54908o.peekFirst();
                if (cVar != null) {
                    int c10 = c.this.f54894a.c(0L);
                    if (c10 >= 0) {
                        a(c10, cVar);
                    } else if (c10 != -1) {
                        Log.e("AudioRenderer", "Unhandled value " + c10 + " when receiving decoded input frame");
                    }
                }
            }
            c.this.f54908o.clear();
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ql.b encoder) {
        this(encoder, null, 2, null);
        Intrinsics.checkNotNullParameter(encoder, "encoder");
    }

    @Override // xl.i
    public boolean a() {
        return !this.f54895b.isEmpty();
    }

    @Override // xl.i
    public void b(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        c(mediaFormat, mediaFormat2);
        this.f54907n.set(false);
        this.f54909p.start();
        Iterator it = this.f54895b.iterator();
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
        if (mediaFormat == null || (number = zl.e.f56525a.a(mediaFormat, num)) == null) {
            number = num;
        }
        if (mediaFormat2 == null || (number2 = zl.e.f56525a.a(mediaFormat2, num)) == null) {
            number2 = num;
        }
        if (mediaFormat == null || (number3 = zl.e.f56525a.d(mediaFormat, num)) == null) {
            number3 = num;
        }
        if (mediaFormat2 != null && (d10 = zl.e.f56525a.d(mediaFormat2, num)) != null) {
            num = d10;
        }
        int i10 = this.f54899f;
        if ((number instanceof Integer) && i10 == number.intValue()) {
            int i11 = this.f54900g;
            if ((number2 instanceof Integer) && i11 == number2.intValue()) {
                int i12 = this.f54901h;
                if ((number3 instanceof Integer) && i12 == number3.intValue()) {
                    int i13 = this.f54902i;
                    if ((num instanceof Integer) && i13 == num.intValue()) {
                        return;
                    }
                }
            }
        }
        xl.a aVar = this.f54906m;
        if (aVar != null) {
            aVar.release();
        }
        this.f54906m = this.f54905l.a(mediaFormat, mediaFormat2);
        this.f54899f = number.intValue();
        this.f54900g = number2.intValue();
        this.f54901h = number3.intValue();
        this.f54902i = num.intValue();
        this.f54898e = 1000000.0d / num.doubleValue();
        this.f54903j = num.doubleValue() / number3.doubleValue();
        this.f54896c = mediaFormat;
        this.f54897d = mediaFormat2;
    }

    @Override // xl.i
    public void d(ql.c cVar, long j10) {
        if (!this.f54907n.get() && cVar != null) {
            ql.c cVar2 = new ql.c(cVar.f45454a, this.f54904k.c(((int) Math.ceil((cVar.f45456c.size / (this.f54899f * 2)) * this.f54903j)) * this.f54900g * 2), new MediaCodec.BufferInfo());
            xl.a aVar = this.f54906m;
            if (aVar != null) {
                aVar.a(cVar, cVar2);
            }
            Iterator it = this.f54895b.iterator();
            if (!it.hasNext()) {
                this.f54908o.add(cVar2);
            } else {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // xl.i
    public void release() {
        this.f54907n.set(true);
        xl.a aVar = this.f54906m;
        if (aVar != null) {
            aVar.release();
        }
        this.f54904k.b();
        Iterator it = this.f54895b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public c(ql.b encoder, List list) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        this.f54894a = encoder;
        this.f54895b = list == null ? CollectionsKt.l() : list;
        this.f54899f = -1;
        this.f54900g = -1;
        this.f54901h = -1;
        this.f54902i = -1;
        this.f54903j = 1.0d;
        this.f54904k = new zl.a(true);
        this.f54905l = new b();
        this.f54907n = new AtomicBoolean(false);
        this.f54908o = new LinkedBlockingDeque();
        this.f54909p = new a();
    }

    public /* synthetic */ c(ql.b bVar, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? null : list);
    }
}

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
    private final ql.b f54895a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54896b;

    /* renamed from: c  reason: collision with root package name */
    private MediaFormat f54897c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat f54898d;

    /* renamed from: e  reason: collision with root package name */
    private double f54899e;

    /* renamed from: f  reason: collision with root package name */
    private int f54900f;

    /* renamed from: g  reason: collision with root package name */
    private int f54901g;

    /* renamed from: h  reason: collision with root package name */
    private int f54902h;

    /* renamed from: i  reason: collision with root package name */
    private int f54903i;

    /* renamed from: j  reason: collision with root package name */
    private double f54904j;

    /* renamed from: k  reason: collision with root package name */
    private final zl.a f54905k;

    /* renamed from: l  reason: collision with root package name */
    private final b f54906l;

    /* renamed from: m  reason: collision with root package name */
    private xl.a f54907m;

    /* renamed from: n  reason: collision with root package name */
    private AtomicBoolean f54908n;

    /* renamed from: o  reason: collision with root package name */
    private final LinkedBlockingDeque f54909o;

    /* renamed from: p  reason: collision with root package name */
    private final a f54910p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a extends Thread {
        public a() {
        }

        private final void a(int i10, ql.c cVar) {
            ByteBuffer byteBuffer;
            boolean z10;
            ql.c a10 = c.this.f54895a.a(i10);
            if (a10 != null) {
                c cVar2 = c.this;
                if (a10.f45456b != null && (byteBuffer = cVar.f45456b) != null) {
                    MediaCodec.BufferInfo bufferInfo = a10.f45457c;
                    bufferInfo.offset = 0;
                    MediaCodec.BufferInfo bufferInfo2 = cVar.f45457c;
                    bufferInfo.flags = bufferInfo2.flags;
                    bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs + ((long) ((byteBuffer.position() / (cVar2.f54901g * 2)) * cVar2.f54899e));
                    if (a10.f45456b.limit() >= cVar.f45456b.remaining()) {
                        a10.f45457c.size = cVar.f45456b.remaining();
                        z10 = true;
                    } else {
                        a10.f45457c.size = a10.f45456b.limit();
                        a10.f45457c.flags &= -5;
                        z10 = false;
                    }
                    int i11 = a10.f45457c.size;
                    for (int i12 = 0; i12 < i11; i12++) {
                        a10.f45456b.put(cVar.f45456b.get());
                    }
                    if (z10) {
                        cVar2.f54909o.removeFirst();
                        zl.a aVar = cVar2.f54905k;
                        ByteBuffer byteBuffer2 = cVar.f45456b;
                        Intrinsics.checkNotNullExpressionValue(byteBuffer2, "inputFrame.buffer");
                        aVar.d(byteBuffer2);
                    }
                    cVar2.f54895a.d(a10);
                }
            }
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            while (!c.this.f54908n.get()) {
                ql.c cVar = (ql.c) c.this.f54909o.peekFirst();
                if (cVar != null) {
                    int c10 = c.this.f54895a.c(0L);
                    if (c10 >= 0) {
                        a(c10, cVar);
                    } else if (c10 != -1) {
                        Log.e("AudioRenderer", "Unhandled value " + c10 + " when receiving decoded input frame");
                    }
                }
            }
            c.this.f54909o.clear();
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ql.b encoder) {
        this(encoder, null, 2, null);
        Intrinsics.checkNotNullParameter(encoder, "encoder");
    }

    @Override // xl.i
    public boolean a() {
        return !this.f54896b.isEmpty();
    }

    @Override // xl.i
    public void b(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        c(mediaFormat, mediaFormat2);
        this.f54908n.set(false);
        this.f54910p.start();
        Iterator it = this.f54896b.iterator();
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
        if (mediaFormat == null || (number = zl.e.f56526a.a(mediaFormat, num)) == null) {
            number = num;
        }
        if (mediaFormat2 == null || (number2 = zl.e.f56526a.a(mediaFormat2, num)) == null) {
            number2 = num;
        }
        if (mediaFormat == null || (number3 = zl.e.f56526a.d(mediaFormat, num)) == null) {
            number3 = num;
        }
        if (mediaFormat2 != null && (d10 = zl.e.f56526a.d(mediaFormat2, num)) != null) {
            num = d10;
        }
        int i10 = this.f54900f;
        if ((number instanceof Integer) && i10 == number.intValue()) {
            int i11 = this.f54901g;
            if ((number2 instanceof Integer) && i11 == number2.intValue()) {
                int i12 = this.f54902h;
                if ((number3 instanceof Integer) && i12 == number3.intValue()) {
                    int i13 = this.f54903i;
                    if ((num instanceof Integer) && i13 == num.intValue()) {
                        return;
                    }
                }
            }
        }
        xl.a aVar = this.f54907m;
        if (aVar != null) {
            aVar.release();
        }
        this.f54907m = this.f54906l.a(mediaFormat, mediaFormat2);
        this.f54900f = number.intValue();
        this.f54901g = number2.intValue();
        this.f54902h = number3.intValue();
        this.f54903i = num.intValue();
        this.f54899e = 1000000.0d / num.doubleValue();
        this.f54904j = num.doubleValue() / number3.doubleValue();
        this.f54897c = mediaFormat;
        this.f54898d = mediaFormat2;
    }

    @Override // xl.i
    public void d(ql.c cVar, long j10) {
        if (!this.f54908n.get() && cVar != null) {
            ql.c cVar2 = new ql.c(cVar.f45455a, this.f54905k.c(((int) Math.ceil((cVar.f45457c.size / (this.f54900f * 2)) * this.f54904j)) * this.f54901g * 2), new MediaCodec.BufferInfo());
            xl.a aVar = this.f54907m;
            if (aVar != null) {
                aVar.a(cVar, cVar2);
            }
            Iterator it = this.f54896b.iterator();
            if (!it.hasNext()) {
                this.f54909o.add(cVar2);
            } else {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // xl.i
    public void release() {
        this.f54908n.set(true);
        xl.a aVar = this.f54907m;
        if (aVar != null) {
            aVar.release();
        }
        this.f54905k.b();
        Iterator it = this.f54896b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public c(ql.b encoder, List list) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        this.f54895a = encoder;
        this.f54896b = list == null ? CollectionsKt.l() : list;
        this.f54900f = -1;
        this.f54901g = -1;
        this.f54902h = -1;
        this.f54903i = -1;
        this.f54904j = 1.0d;
        this.f54905k = new zl.a(true);
        this.f54906l = new b();
        this.f54908n = new AtomicBoolean(false);
        this.f54909o = new LinkedBlockingDeque();
        this.f54910p = new a();
    }

    public /* synthetic */ c(ql.b bVar, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? null : list);
    }
}

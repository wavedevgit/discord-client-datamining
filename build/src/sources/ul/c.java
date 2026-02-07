package ul;

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
    private final nl.b f51638a;

    /* renamed from: b  reason: collision with root package name */
    private final List f51639b;

    /* renamed from: c  reason: collision with root package name */
    private MediaFormat f51640c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat f51641d;

    /* renamed from: e  reason: collision with root package name */
    private double f51642e;

    /* renamed from: f  reason: collision with root package name */
    private int f51643f;

    /* renamed from: g  reason: collision with root package name */
    private int f51644g;

    /* renamed from: h  reason: collision with root package name */
    private int f51645h;

    /* renamed from: i  reason: collision with root package name */
    private int f51646i;

    /* renamed from: j  reason: collision with root package name */
    private double f51647j;

    /* renamed from: k  reason: collision with root package name */
    private final wl.a f51648k;

    /* renamed from: l  reason: collision with root package name */
    private final b f51649l;

    /* renamed from: m  reason: collision with root package name */
    private ul.a f51650m;

    /* renamed from: n  reason: collision with root package name */
    private AtomicBoolean f51651n;

    /* renamed from: o  reason: collision with root package name */
    private final LinkedBlockingDeque f51652o;

    /* renamed from: p  reason: collision with root package name */
    private final a f51653p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a extends Thread {
        public a() {
        }

        private final void a(int i10, nl.c cVar) {
            ByteBuffer byteBuffer;
            boolean z10;
            nl.c a10 = c.this.f51638a.a(i10);
            if (a10 != null) {
                c cVar2 = c.this;
                if (a10.f40942b != null && (byteBuffer = cVar.f40942b) != null) {
                    MediaCodec.BufferInfo bufferInfo = a10.f40943c;
                    bufferInfo.offset = 0;
                    MediaCodec.BufferInfo bufferInfo2 = cVar.f40943c;
                    bufferInfo.flags = bufferInfo2.flags;
                    bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs + ((long) ((byteBuffer.position() / (cVar2.f51644g * 2)) * cVar2.f51642e));
                    if (a10.f40942b.limit() >= cVar.f40942b.remaining()) {
                        a10.f40943c.size = cVar.f40942b.remaining();
                        z10 = true;
                    } else {
                        a10.f40943c.size = a10.f40942b.limit();
                        a10.f40943c.flags &= -5;
                        z10 = false;
                    }
                    int i11 = a10.f40943c.size;
                    for (int i12 = 0; i12 < i11; i12++) {
                        a10.f40942b.put(cVar.f40942b.get());
                    }
                    if (z10) {
                        cVar2.f51652o.removeFirst();
                        wl.a aVar = cVar2.f51648k;
                        ByteBuffer byteBuffer2 = cVar.f40942b;
                        Intrinsics.checkNotNullExpressionValue(byteBuffer2, "inputFrame.buffer");
                        aVar.d(byteBuffer2);
                    }
                    cVar2.f51638a.e(a10);
                }
            }
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            while (!c.this.f51651n.get()) {
                nl.c cVar = (nl.c) c.this.f51652o.peekFirst();
                if (cVar != null) {
                    int c10 = c.this.f51638a.c(0L);
                    if (c10 >= 0) {
                        a(c10, cVar);
                    } else if (c10 != -1) {
                        Log.e("AudioRenderer", "Unhandled value " + c10 + " when receiving decoded input frame");
                    }
                }
            }
            c.this.f51652o.clear();
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(nl.b encoder) {
        this(encoder, null, 2, null);
        Intrinsics.checkNotNullParameter(encoder, "encoder");
    }

    @Override // ul.i
    public boolean a() {
        return !this.f51639b.isEmpty();
    }

    @Override // ul.i
    public void b(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        d(mediaFormat, mediaFormat2);
        this.f51651n.set(false);
        this.f51653p.start();
        Iterator it = this.f51639b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    @Override // ul.i
    public void c(nl.c cVar, long j10) {
        if (!this.f51651n.get() && cVar != null) {
            nl.c cVar2 = new nl.c(cVar.f40941a, this.f51648k.c(((int) Math.ceil((cVar.f40943c.size / (this.f51643f * 2)) * this.f51647j)) * this.f51644g * 2), new MediaCodec.BufferInfo());
            ul.a aVar = this.f51650m;
            if (aVar != null) {
                aVar.a(cVar, cVar2);
            }
            Iterator it = this.f51639b.iterator();
            if (!it.hasNext()) {
                this.f51652o.add(cVar2);
            } else {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // ul.i
    public void d(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        Number number;
        Number number2;
        Number number3;
        Number d10;
        Integer num = -1;
        if (mediaFormat == null || (number = wl.e.f53916a.a(mediaFormat, num)) == null) {
            number = num;
        }
        if (mediaFormat2 == null || (number2 = wl.e.f53916a.a(mediaFormat2, num)) == null) {
            number2 = num;
        }
        if (mediaFormat == null || (number3 = wl.e.f53916a.d(mediaFormat, num)) == null) {
            number3 = num;
        }
        if (mediaFormat2 != null && (d10 = wl.e.f53916a.d(mediaFormat2, num)) != null) {
            num = d10;
        }
        int i10 = this.f51643f;
        if ((number instanceof Integer) && i10 == number.intValue()) {
            int i11 = this.f51644g;
            if ((number2 instanceof Integer) && i11 == number2.intValue()) {
                int i12 = this.f51645h;
                if ((number3 instanceof Integer) && i12 == number3.intValue()) {
                    int i13 = this.f51646i;
                    if ((num instanceof Integer) && i13 == num.intValue()) {
                        return;
                    }
                }
            }
        }
        ul.a aVar = this.f51650m;
        if (aVar != null) {
            aVar.release();
        }
        this.f51650m = this.f51649l.a(mediaFormat, mediaFormat2);
        this.f51643f = number.intValue();
        this.f51644g = number2.intValue();
        this.f51645h = number3.intValue();
        this.f51646i = num.intValue();
        this.f51642e = 1000000.0d / num.doubleValue();
        this.f51647j = num.doubleValue() / number3.doubleValue();
        this.f51640c = mediaFormat;
        this.f51641d = mediaFormat2;
    }

    @Override // ul.i
    public void release() {
        this.f51651n.set(true);
        ul.a aVar = this.f51650m;
        if (aVar != null) {
            aVar.release();
        }
        this.f51648k.b();
        Iterator it = this.f51639b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public c(nl.b encoder, List list) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        this.f51638a = encoder;
        this.f51639b = list == null ? CollectionsKt.l() : list;
        this.f51643f = -1;
        this.f51644g = -1;
        this.f51645h = -1;
        this.f51646i = -1;
        this.f51647j = 1.0d;
        this.f51648k = new wl.a(true);
        this.f51649l = new b();
        this.f51651n = new AtomicBoolean(false);
        this.f51652o = new LinkedBlockingDeque();
        this.f51653p = new a();
    }

    public /* synthetic */ c(nl.b bVar, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? null : list);
    }
}

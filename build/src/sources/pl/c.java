package pl;

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
    private final il.b f46096a;

    /* renamed from: b  reason: collision with root package name */
    private final List f46097b;

    /* renamed from: c  reason: collision with root package name */
    private MediaFormat f46098c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat f46099d;

    /* renamed from: e  reason: collision with root package name */
    private double f46100e;

    /* renamed from: f  reason: collision with root package name */
    private int f46101f;

    /* renamed from: g  reason: collision with root package name */
    private int f46102g;

    /* renamed from: h  reason: collision with root package name */
    private int f46103h;

    /* renamed from: i  reason: collision with root package name */
    private int f46104i;

    /* renamed from: j  reason: collision with root package name */
    private double f46105j;

    /* renamed from: k  reason: collision with root package name */
    private final rl.a f46106k;

    /* renamed from: l  reason: collision with root package name */
    private final b f46107l;

    /* renamed from: m  reason: collision with root package name */
    private pl.a f46108m;

    /* renamed from: n  reason: collision with root package name */
    private AtomicBoolean f46109n;

    /* renamed from: o  reason: collision with root package name */
    private final LinkedBlockingDeque f46110o;

    /* renamed from: p  reason: collision with root package name */
    private final a f46111p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a extends Thread {
        public a() {
        }

        private final void a(int i10, il.c cVar) {
            ByteBuffer byteBuffer;
            boolean z10;
            il.c a10 = c.this.f46096a.a(i10);
            if (a10 != null) {
                c cVar2 = c.this;
                if (a10.f28593b != null && (byteBuffer = cVar.f28593b) != null) {
                    MediaCodec.BufferInfo bufferInfo = a10.f28594c;
                    bufferInfo.offset = 0;
                    MediaCodec.BufferInfo bufferInfo2 = cVar.f28594c;
                    bufferInfo.flags = bufferInfo2.flags;
                    bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs + ((long) ((byteBuffer.position() / (cVar2.f46102g * 2)) * cVar2.f46100e));
                    if (a10.f28593b.limit() >= cVar.f28593b.remaining()) {
                        a10.f28594c.size = cVar.f28593b.remaining();
                        z10 = true;
                    } else {
                        a10.f28594c.size = a10.f28593b.limit();
                        a10.f28594c.flags &= -5;
                        z10 = false;
                    }
                    int i11 = a10.f28594c.size;
                    for (int i12 = 0; i12 < i11; i12++) {
                        a10.f28593b.put(cVar.f28593b.get());
                    }
                    if (z10) {
                        cVar2.f46110o.removeFirst();
                        rl.a aVar = cVar2.f46106k;
                        ByteBuffer byteBuffer2 = cVar.f28593b;
                        Intrinsics.checkNotNullExpressionValue(byteBuffer2, "inputFrame.buffer");
                        aVar.d(byteBuffer2);
                    }
                    cVar2.f46096a.c(a10);
                }
            }
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            while (!c.this.f46109n.get()) {
                il.c cVar = (il.c) c.this.f46110o.peekFirst();
                if (cVar != null) {
                    int d10 = c.this.f46096a.d(0L);
                    if (d10 >= 0) {
                        a(d10, cVar);
                    } else if (d10 != -1) {
                        Log.e("AudioRenderer", "Unhandled value " + d10 + " when receiving decoded input frame");
                    }
                }
            }
            c.this.f46110o.clear();
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(il.b encoder) {
        this(encoder, null, 2, null);
        Intrinsics.checkNotNullParameter(encoder, "encoder");
    }

    @Override // pl.i
    public boolean a() {
        return !this.f46097b.isEmpty();
    }

    @Override // pl.i
    public void b(il.c cVar, long j10) {
        if (!this.f46109n.get() && cVar != null) {
            il.c cVar2 = new il.c(cVar.f28592a, this.f46106k.c(((int) Math.ceil((cVar.f28594c.size / (this.f46101f * 2)) * this.f46105j)) * this.f46102g * 2), new MediaCodec.BufferInfo());
            pl.a aVar = this.f46108m;
            if (aVar != null) {
                aVar.a(cVar, cVar2);
            }
            Iterator it = this.f46097b.iterator();
            if (!it.hasNext()) {
                this.f46110o.add(cVar2);
            } else {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // pl.i
    public void c(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        d(mediaFormat, mediaFormat2);
        this.f46109n.set(false);
        this.f46111p.start();
        Iterator it = this.f46097b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    @Override // pl.i
    public void d(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        Number number;
        Number number2;
        Number number3;
        Number d10;
        Integer num = -1;
        if (mediaFormat == null || (number = rl.e.f48358a.a(mediaFormat, num)) == null) {
            number = num;
        }
        if (mediaFormat2 == null || (number2 = rl.e.f48358a.a(mediaFormat2, num)) == null) {
            number2 = num;
        }
        if (mediaFormat == null || (number3 = rl.e.f48358a.d(mediaFormat, num)) == null) {
            number3 = num;
        }
        if (mediaFormat2 != null && (d10 = rl.e.f48358a.d(mediaFormat2, num)) != null) {
            num = d10;
        }
        int i10 = this.f46101f;
        if ((number instanceof Integer) && i10 == number.intValue()) {
            int i11 = this.f46102g;
            if ((number2 instanceof Integer) && i11 == number2.intValue()) {
                int i12 = this.f46103h;
                if ((number3 instanceof Integer) && i12 == number3.intValue()) {
                    int i13 = this.f46104i;
                    if ((num instanceof Integer) && i13 == num.intValue()) {
                        return;
                    }
                }
            }
        }
        pl.a aVar = this.f46108m;
        if (aVar != null) {
            aVar.release();
        }
        this.f46108m = this.f46107l.a(mediaFormat, mediaFormat2);
        this.f46101f = number.intValue();
        this.f46102g = number2.intValue();
        this.f46103h = number3.intValue();
        this.f46104i = num.intValue();
        this.f46100e = 1000000.0d / num.doubleValue();
        this.f46105j = num.doubleValue() / number3.doubleValue();
        this.f46098c = mediaFormat;
        this.f46099d = mediaFormat2;
    }

    @Override // pl.i
    public void release() {
        this.f46109n.set(true);
        pl.a aVar = this.f46108m;
        if (aVar != null) {
            aVar.release();
        }
        this.f46106k.b();
        Iterator it = this.f46097b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public c(il.b encoder, List list) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        this.f46096a = encoder;
        this.f46097b = list == null ? CollectionsKt.l() : list;
        this.f46101f = -1;
        this.f46102g = -1;
        this.f46103h = -1;
        this.f46104i = -1;
        this.f46105j = 1.0d;
        this.f46106k = new rl.a(true);
        this.f46107l = new b();
        this.f46109n = new AtomicBoolean(false);
        this.f46110o = new LinkedBlockingDeque();
        this.f46111p = new a();
    }

    public /* synthetic */ c(il.b bVar, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? null : list);
    }
}

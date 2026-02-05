package sl;

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
    private final ll.b f49744a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49745b;

    /* renamed from: c  reason: collision with root package name */
    private MediaFormat f49746c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat f49747d;

    /* renamed from: e  reason: collision with root package name */
    private double f49748e;

    /* renamed from: f  reason: collision with root package name */
    private int f49749f;

    /* renamed from: g  reason: collision with root package name */
    private int f49750g;

    /* renamed from: h  reason: collision with root package name */
    private int f49751h;

    /* renamed from: i  reason: collision with root package name */
    private int f49752i;

    /* renamed from: j  reason: collision with root package name */
    private double f49753j;

    /* renamed from: k  reason: collision with root package name */
    private final ul.a f49754k;

    /* renamed from: l  reason: collision with root package name */
    private final b f49755l;

    /* renamed from: m  reason: collision with root package name */
    private sl.a f49756m;

    /* renamed from: n  reason: collision with root package name */
    private AtomicBoolean f49757n;

    /* renamed from: o  reason: collision with root package name */
    private final LinkedBlockingDeque f49758o;

    /* renamed from: p  reason: collision with root package name */
    private final a f49759p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class a extends Thread {
        public a() {
        }

        private final void a(int i10, ll.c cVar) {
            ByteBuffer byteBuffer;
            boolean z10;
            ll.c a10 = c.this.f49744a.a(i10);
            if (a10 != null) {
                c cVar2 = c.this;
                if (a10.f36938b != null && (byteBuffer = cVar.f36938b) != null) {
                    MediaCodec.BufferInfo bufferInfo = a10.f36939c;
                    bufferInfo.offset = 0;
                    MediaCodec.BufferInfo bufferInfo2 = cVar.f36939c;
                    bufferInfo.flags = bufferInfo2.flags;
                    bufferInfo.presentationTimeUs = bufferInfo2.presentationTimeUs + ((long) ((byteBuffer.position() / (cVar2.f49750g * 2)) * cVar2.f49748e));
                    if (a10.f36938b.limit() >= cVar.f36938b.remaining()) {
                        a10.f36939c.size = cVar.f36938b.remaining();
                        z10 = true;
                    } else {
                        a10.f36939c.size = a10.f36938b.limit();
                        a10.f36939c.flags &= -5;
                        z10 = false;
                    }
                    int i11 = a10.f36939c.size;
                    for (int i12 = 0; i12 < i11; i12++) {
                        a10.f36938b.put(cVar.f36938b.get());
                    }
                    if (z10) {
                        cVar2.f49758o.removeFirst();
                        ul.a aVar = cVar2.f49754k;
                        ByteBuffer byteBuffer2 = cVar.f36938b;
                        Intrinsics.checkNotNullExpressionValue(byteBuffer2, "inputFrame.buffer");
                        aVar.d(byteBuffer2);
                    }
                    cVar2.f49744a.e(a10);
                }
            }
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            while (!c.this.f49757n.get()) {
                ll.c cVar = (ll.c) c.this.f49758o.peekFirst();
                if (cVar != null) {
                    int c10 = c.this.f49744a.c(0L);
                    if (c10 >= 0) {
                        a(c10, cVar);
                    } else if (c10 != -1) {
                        Log.e("AudioRenderer", "Unhandled value " + c10 + " when receiving decoded input frame");
                    }
                }
            }
            c.this.f49758o.clear();
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ll.b encoder) {
        this(encoder, null, 2, null);
        Intrinsics.checkNotNullParameter(encoder, "encoder");
    }

    @Override // sl.i
    public boolean a() {
        return !this.f49745b.isEmpty();
    }

    @Override // sl.i
    public void b(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        d(mediaFormat, mediaFormat2);
        this.f49757n.set(false);
        this.f49759p.start();
        Iterator it = this.f49745b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    @Override // sl.i
    public void c(ll.c cVar, long j10) {
        if (!this.f49757n.get() && cVar != null) {
            ll.c cVar2 = new ll.c(cVar.f36937a, this.f49754k.c(((int) Math.ceil((cVar.f36939c.size / (this.f49749f * 2)) * this.f49753j)) * this.f49750g * 2), new MediaCodec.BufferInfo());
            sl.a aVar = this.f49756m;
            if (aVar != null) {
                aVar.a(cVar, cVar2);
            }
            Iterator it = this.f49745b.iterator();
            if (!it.hasNext()) {
                this.f49758o.add(cVar2);
            } else {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
    }

    @Override // sl.i
    public void d(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        Number number;
        Number number2;
        Number number3;
        Number d10;
        Integer num = -1;
        if (mediaFormat == null || (number = ul.e.f51468a.a(mediaFormat, num)) == null) {
            number = num;
        }
        if (mediaFormat2 == null || (number2 = ul.e.f51468a.a(mediaFormat2, num)) == null) {
            number2 = num;
        }
        if (mediaFormat == null || (number3 = ul.e.f51468a.d(mediaFormat, num)) == null) {
            number3 = num;
        }
        if (mediaFormat2 != null && (d10 = ul.e.f51468a.d(mediaFormat2, num)) != null) {
            num = d10;
        }
        int i10 = this.f49749f;
        if ((number instanceof Integer) && i10 == number.intValue()) {
            int i11 = this.f49750g;
            if ((number2 instanceof Integer) && i11 == number2.intValue()) {
                int i12 = this.f49751h;
                if ((number3 instanceof Integer) && i12 == number3.intValue()) {
                    int i13 = this.f49752i;
                    if ((num instanceof Integer) && i13 == num.intValue()) {
                        return;
                    }
                }
            }
        }
        sl.a aVar = this.f49756m;
        if (aVar != null) {
            aVar.release();
        }
        this.f49756m = this.f49755l.a(mediaFormat, mediaFormat2);
        this.f49749f = number.intValue();
        this.f49750g = number2.intValue();
        this.f49751h = number3.intValue();
        this.f49752i = num.intValue();
        this.f49748e = 1000000.0d / num.doubleValue();
        this.f49753j = num.doubleValue() / number3.doubleValue();
        this.f49746c = mediaFormat;
        this.f49747d = mediaFormat2;
    }

    @Override // sl.i
    public void release() {
        this.f49757n.set(true);
        sl.a aVar = this.f49756m;
        if (aVar != null) {
            aVar.release();
        }
        this.f49754k.b();
        Iterator it = this.f49745b.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public c(ll.b encoder, List list) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        this.f49744a = encoder;
        this.f49745b = list == null ? CollectionsKt.l() : list;
        this.f49749f = -1;
        this.f49750g = -1;
        this.f49751h = -1;
        this.f49752i = -1;
        this.f49753j = 1.0d;
        this.f49754k = new ul.a(true);
        this.f49755l = new b();
        this.f49757n = new AtomicBoolean(false);
        this.f49758o = new LinkedBlockingDeque();
        this.f49759p = new a();
    }

    public /* synthetic */ c(ll.b bVar, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? null : list);
    }
}

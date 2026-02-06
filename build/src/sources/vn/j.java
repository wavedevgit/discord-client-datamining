package vn;

import android.graphics.Rect;
import android.media.Image;
import android.util.Size;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.nio.ByteBuffer;
import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.webrtc.PeerConnection;
import un.i0;
import un.j0;
import vn.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements e {

    /* renamed from: c  reason: collision with root package name */
    public static final a f52792c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f52793a = new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS];

    /* renamed from: b  reason: collision with root package name */
    private final Size f52794b = new Size(0, 0);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private final i0 b(ByteBuffer byteBuffer, int i10, int i11, Rect rect) {
        if (i10 == 0 || i11 == 0) {
            return null;
        }
        long[] jArr = new long[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
        byteBuffer.rewind();
        int width = rect.width() * rect.height();
        int width2 = rect.width();
        if (width2 > 32768) {
            return null;
        }
        int i12 = rect.bottom;
        long j10 = 0;
        for (int i13 = rect.top; i13 < i12; i13++) {
            byteBuffer.position((i13 * i10) + rect.left);
            byteBuffer.get(this.f52793a, 0, width2);
            for (int i14 = 0; i14 < width2; i14++) {
                int i15 = this.f52793a[i14] & 255;
                j10 += i15;
                jArr[i15] = jArr[i15] + 1;
            }
        }
        double d10 = j10 / width;
        return new i0(d10 / 255.0d, e(byteBuffer, i10, (int) d10, rect), d(this, jArr, width, 0.0d, 0.0d, 12, null) / 255.0d, width);
    }

    private final int c(long[] jArr, int i10, double d10, double d11) {
        double d12 = 100;
        double d13 = i10;
        double floor = Math.floor((d10 / d12) * d13);
        double floor2 = Math.floor((d11 / d12) * d13);
        int length = jArr.length;
        int i11 = 0;
        long j10 = 0;
        int i12 = 0;
        long j11 = 0;
        while (true) {
            if (i12 < length) {
                j11 += jArr[i12];
                if (j11 > floor) {
                    break;
                }
                i12++;
            } else {
                i12 = 0;
                break;
            }
        }
        double d14 = d13 - floor2;
        int length2 = jArr.length - 1;
        if (length2 >= 0) {
            while (true) {
                int i13 = length2 - 1;
                j10 += jArr[length2];
                if (j10 > d14) {
                    i11 = length2;
                    break;
                } else if (i13 < 0) {
                    break;
                } else {
                    length2 = i13;
                }
            }
        }
        return i11 - i12;
    }

    static /* synthetic */ int d(j jVar, long[] jArr, int i10, double d10, double d11, int i11, Object obj) {
        if ((i11 & 4) != 0) {
            d10 = 1.0d;
        }
        double d12 = d10;
        if ((i11 & 8) != 0) {
            d11 = 99.0d;
        }
        return jVar.c(jArr, i10, d12, d11);
    }

    private final double e(ByteBuffer byteBuffer, int i10, int i11, Rect rect) {
        int width = rect.width() * rect.height();
        int width2 = rect.width();
        int i12 = rect.bottom;
        long j10 = 0;
        for (int i13 = rect.top; i13 < i12; i13++) {
            byteBuffer.position((i13 * i10) + rect.left);
            byteBuffer.get(this.f52793a, 0, width2);
            for (int i14 = 0; i14 < width2; i14++) {
                int i15 = (this.f52793a[i14] & 255) - i11;
                j10 += i15 * i15;
            }
        }
        return Math.sqrt(j10 / width) / 128.0d;
    }

    @Override // vn.e
    public Object a(j0 j0Var, Rect rect, Continuation continuation) {
        Image.Plane plane;
        int width = j0Var.F().getWidth();
        int height = j0Var.F().getHeight();
        Image.Plane[] planes = j0Var.F().getPlanes();
        if (planes != null && (plane = planes[0]) != null) {
            if (rect == null) {
                rect = new Rect(0, 0, width, height);
            }
            ByteBuffer buffer = plane.getBuffer();
            Intrinsics.checkNotNullExpressionValue(buffer, "getBuffer(...)");
            i0 b10 = b(buffer, width, height, rect);
            if (b10 == null) {
                Result.a aVar = Result.f32005e;
                return Result.b(a.b.f52770a);
            }
            Result.a aVar2 = Result.f32005e;
            return Result.b(new a.e(b10));
        }
        Result.a aVar3 = Result.f32005e;
        return Result.b(a.b.f52770a);
    }
}

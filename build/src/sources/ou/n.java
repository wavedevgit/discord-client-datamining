package ou;

import java.security.MessageDigest;
import javax.crypto.Mac;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends j implements Sink {

    /* renamed from: o  reason: collision with root package name */
    public static final a f44541o = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private final MessageDigest f44542e;

    /* renamed from: i  reason: collision with root package name */
    private final Mac f44543i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final n a(Sink sink) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            return new n(sink, "MD5");
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(Sink sink, MessageDigest digest) {
        super(sink);
        Intrinsics.checkNotNullParameter(sink, "sink");
        Intrinsics.checkNotNullParameter(digest, "digest");
        this.f44542e = digest;
        this.f44543i = null;
    }

    public final ByteString a() {
        byte[] doFinal;
        MessageDigest messageDigest = this.f44542e;
        if (messageDigest != null) {
            doFinal = messageDigest.digest();
        } else {
            Mac mac = this.f44543i;
            Intrinsics.checkNotNull(mac);
            doFinal = mac.doFinal();
        }
        Intrinsics.checkNotNull(doFinal);
        return new ByteString(doFinal);
    }

    @Override // ou.j, okio.Sink
    public void u0(Buffer source, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        okio.b.b(source.size(), 0L, j10);
        g0 g0Var = source.f44049d;
        Intrinsics.checkNotNull(g0Var);
        long j11 = 0;
        while (j11 < j10) {
            int min = (int) Math.min(j10 - j11, g0Var.f44510c - g0Var.f44509b);
            MessageDigest messageDigest = this.f44542e;
            if (messageDigest != null) {
                messageDigest.update(g0Var.f44508a, g0Var.f44509b, min);
            } else {
                Mac mac = this.f44543i;
                Intrinsics.checkNotNull(mac);
                mac.update(g0Var.f44508a, g0Var.f44509b, min);
            }
            j11 += min;
            g0Var = g0Var.f44513f;
            Intrinsics.checkNotNull(g0Var);
        }
        super.u0(source, j10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public n(okio.Sink r2, java.lang.String r3) {
        /*
            r1 = this;
            java.lang.String r0 = "sink"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.String r0 = "algorithm"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            java.security.MessageDigest r3 = java.security.MessageDigest.getInstance(r3)
            java.lang.String r0 = "getInstance(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ou.n.<init>(okio.Sink, java.lang.String):void");
    }
}

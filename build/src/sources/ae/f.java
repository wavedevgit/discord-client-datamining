package ae;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f extends rc.h implements h {

    /* renamed from: n  reason: collision with root package name */
    private final String f746n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends l {
        a() {
        }

        @Override // rc.g
        public void t() {
            f.this.r(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public f(String str) {
        super(new k[2], new l[2]);
        this.f746n = str;
        u(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rc.h
    /* renamed from: A */
    public final i j(k kVar, l lVar, boolean z10) {
        try {
            ByteBuffer byteBuffer = (ByteBuffer) oe.a.e(kVar.f46229i);
            lVar.u(kVar.f46231p, z(byteBuffer.array(), byteBuffer.limit(), z10), kVar.f749t);
            lVar.i(Integer.MIN_VALUE);
            return null;
        } catch (i e10) {
            return e10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rc.h
    /* renamed from: w */
    public final k g() {
        return new k();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rc.h
    /* renamed from: x */
    public final l h() {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rc.h
    /* renamed from: y */
    public final i i(Throwable th2) {
        return new i("Unexpected decode error", th2);
    }

    protected abstract g z(byte[] bArr, int i10, boolean z10);

    @Override // ae.h
    public void a(long j10) {
    }
}

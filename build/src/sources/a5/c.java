package a5;

import a5.h;
import g5.m;
import java.nio.ByteBuffer;
import kotlin.coroutines.Continuation;
import okio.Buffer;
import x4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements h {

    /* renamed from: a  reason: collision with root package name */
    private final ByteBuffer f388a;

    /* renamed from: b  reason: collision with root package name */
    private final m f389b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements h.a {
        @Override // a5.h.a
        /* renamed from: b */
        public h a(ByteBuffer byteBuffer, m mVar, v4.h hVar) {
            return new c(byteBuffer, mVar);
        }
    }

    public c(ByteBuffer byteBuffer, m mVar) {
        this.f388a = byteBuffer;
        this.f389b = mVar;
    }

    @Override // a5.h
    public Object a(Continuation continuation) {
        try {
            Buffer buffer = new Buffer();
            buffer.write(this.f388a);
            this.f388a.position(0);
            return new l(u.f(buffer, this.f389b.g()), null, x4.h.f53109e);
        } catch (Throwable th2) {
            this.f388a.position(0);
            throw th2;
        }
    }
}

package va;

import java.io.IOException;
import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements r8.i {

    /* renamed from: a  reason: collision with root package name */
    private final com.facebook.imagepipeline.memory.f f50804a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.l f50805b;

    public t(com.facebook.imagepipeline.memory.f pool, r8.l pooledByteStreams) {
        Intrinsics.checkNotNullParameter(pool, "pool");
        Intrinsics.checkNotNullParameter(pooledByteStreams, "pooledByteStreams");
        this.f50804a = pool;
        this.f50805b = pooledByteStreams;
    }

    public final s f(InputStream inputStream, com.facebook.imagepipeline.memory.g outputStream) {
        Intrinsics.checkNotNullParameter(inputStream, "inputStream");
        Intrinsics.checkNotNullParameter(outputStream, "outputStream");
        this.f50805b.a(inputStream, outputStream);
        return outputStream.a();
    }

    @Override // r8.i
    /* renamed from: g */
    public s a(InputStream inputStream) {
        Intrinsics.checkNotNullParameter(inputStream, "inputStream");
        com.facebook.imagepipeline.memory.g gVar = new com.facebook.imagepipeline.memory.g(this.f50804a, 0, 2, null);
        try {
            return f(inputStream, gVar);
        } finally {
            gVar.close();
        }
    }

    @Override // r8.i
    /* renamed from: h */
    public s b(InputStream inputStream, int i10) {
        Intrinsics.checkNotNullParameter(inputStream, "inputStream");
        com.facebook.imagepipeline.memory.g gVar = new com.facebook.imagepipeline.memory.g(this.f50804a, i10);
        try {
            return f(inputStream, gVar);
        } finally {
            gVar.close();
        }
    }

    @Override // r8.i
    /* renamed from: i */
    public s d(byte[] bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        com.facebook.imagepipeline.memory.g gVar = new com.facebook.imagepipeline.memory.g(this.f50804a, bytes.length);
        try {
            try {
                gVar.write(bytes, 0, bytes.length);
                return gVar.a();
            } catch (IOException e10) {
                throw o8.n.a(e10);
            }
        } finally {
            gVar.close();
        }
    }

    @Override // r8.i
    /* renamed from: j */
    public com.facebook.imagepipeline.memory.g c() {
        return new com.facebook.imagepipeline.memory.g(this.f50804a, 0, 2, null);
    }

    @Override // r8.i
    /* renamed from: k */
    public com.facebook.imagepipeline.memory.g e(int i10) {
        return new com.facebook.imagepipeline.memory.g(this.f50804a, i10);
    }
}

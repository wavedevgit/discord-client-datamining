package c3;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected int f7997a;

    /* renamed from: b  reason: collision with root package name */
    protected ByteBuffer f7998b;

    /* renamed from: c  reason: collision with root package name */
    private int f7999c;

    /* renamed from: d  reason: collision with root package name */
    private int f8000d;

    /* renamed from: e  reason: collision with root package name */
    d f8001e = d.a();

    /* JADX INFO: Access modifiers changed from: protected */
    public int a(int i10) {
        return i10 + this.f7998b.getInt(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b(int i10) {
        if (i10 < this.f8000d) {
            return this.f7998b.getShort(this.f7999c + i10);
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void c(int i10, ByteBuffer byteBuffer) {
        this.f7998b = byteBuffer;
        if (byteBuffer != null) {
            this.f7997a = i10;
            int i11 = i10 - byteBuffer.getInt(i10);
            this.f7999c = i11;
            this.f8000d = this.f7998b.getShort(i11);
            return;
        }
        this.f7997a = 0;
        this.f7999c = 0;
        this.f8000d = 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int d(int i10) {
        int i11 = i10 + this.f7997a;
        return i11 + this.f7998b.getInt(i11) + 4;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e(int i10) {
        int i11 = i10 + this.f7997a;
        return this.f7998b.getInt(i11 + this.f7998b.getInt(i11));
    }
}

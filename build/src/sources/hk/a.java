package hk;

import hk.i0;
import java.io.FilterInputStream;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements i0 {

    /* renamed from: d  reason: collision with root package name */
    protected int f26138d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c1 a() {
        return new c1(this);
    }

    /* renamed from: hk.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0383a implements i0.a {
        /* JADX INFO: Access modifiers changed from: protected */
        public static c1 a(i0 i0Var) {
            return new c1(i0Var);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: hk.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0384a extends FilterInputStream {

            /* renamed from: d  reason: collision with root package name */
            private int f26139d;

            /* JADX INFO: Access modifiers changed from: package-private */
            public C0384a(InputStream inputStream, int i10) {
                super(inputStream);
                this.f26139d = i10;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int available() {
                return Math.min(super.available(), this.f26139d);
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int read() {
                if (this.f26139d <= 0) {
                    return -1;
                }
                int read = super.read();
                if (read >= 0) {
                    this.f26139d--;
                }
                return read;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public long skip(long j10) {
                int skip = (int) super.skip(Math.min(j10, this.f26139d));
                if (skip >= 0) {
                    this.f26139d -= skip;
                }
                return skip;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int read(byte[] bArr, int i10, int i11) {
                int i12 = this.f26139d;
                if (i12 <= 0) {
                    return -1;
                }
                int read = super.read(bArr, i10, Math.min(i11, i12));
                if (read >= 0) {
                    this.f26139d -= read;
                }
                return read;
            }
        }
    }
}

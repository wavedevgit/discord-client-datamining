package jk;

import java.io.FilterInputStream;
import java.io.InputStream;
import jk.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements i0 {

    /* renamed from: d  reason: collision with root package name */
    protected int f30976d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c1 a() {
        return new c1(this);
    }

    /* renamed from: jk.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0420a implements i0.a {
        /* JADX INFO: Access modifiers changed from: protected */
        public static c1 a(i0 i0Var) {
            return new c1(i0Var);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: jk.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0421a extends FilterInputStream {

            /* renamed from: d  reason: collision with root package name */
            private int f30977d;

            /* JADX INFO: Access modifiers changed from: package-private */
            public C0421a(InputStream inputStream, int i10) {
                super(inputStream);
                this.f30977d = i10;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int available() {
                return Math.min(super.available(), this.f30977d);
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int read() {
                if (this.f30977d <= 0) {
                    return -1;
                }
                int read = super.read();
                if (read >= 0) {
                    this.f30977d--;
                }
                return read;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public long skip(long j10) {
                int skip = (int) super.skip(Math.min(j10, this.f30977d));
                if (skip >= 0) {
                    this.f30977d -= skip;
                }
                return skip;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int read(byte[] bArr, int i10, int i11) {
                int i12 = this.f30977d;
                if (i12 <= 0) {
                    return -1;
                }
                int read = super.read(bArr, i10, Math.min(i11, i12));
                if (read >= 0) {
                    this.f30977d -= read;
                }
                return read;
            }
        }
    }
}

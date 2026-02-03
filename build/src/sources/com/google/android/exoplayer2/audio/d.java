package com.google.android.exoplayer2.audio;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface d {

    /* renamed from: a  reason: collision with root package name */
    public static final ByteBuffer f11834a = ByteBuffer.allocateDirect(0).order(ByteOrder.nativeOrder());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: e  reason: collision with root package name */
        public static final a f11835e = new a(-1, -1, -1);

        /* renamed from: a  reason: collision with root package name */
        public final int f11836a;

        /* renamed from: b  reason: collision with root package name */
        public final int f11837b;

        /* renamed from: c  reason: collision with root package name */
        public final int f11838c;

        /* renamed from: d  reason: collision with root package name */
        public final int f11839d;

        public a(int i10, int i11, int i12) {
            int i13;
            this.f11836a = i10;
            this.f11837b = i11;
            this.f11838c = i12;
            if (w0.E0(i12)) {
                i13 = w0.i0(i12, i11);
            } else {
                i13 = -1;
            }
            this.f11839d = i13;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f11836a == aVar.f11836a && this.f11837b == aVar.f11837b && this.f11838c == aVar.f11838c) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return ii.j.b(Integer.valueOf(this.f11836a), Integer.valueOf(this.f11837b), Integer.valueOf(this.f11838c));
        }

        public String toString() {
            return "AudioFormat[sampleRate=" + this.f11836a + ", channelCount=" + this.f11837b + ", encoding=" + this.f11838c + ']';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends Exception {
        public b(a aVar) {
            this("Unhandled input format:", aVar);
        }

        public b(String str, a aVar) {
            super(str + " " + aVar);
        }
    }

    boolean a();

    ByteBuffer b();

    void c(ByteBuffer byteBuffer);

    boolean d();

    a e(a aVar);

    void f();

    void flush();

    void reset();
}

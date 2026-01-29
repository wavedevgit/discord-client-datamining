package com.google.android.exoplayer2.audio;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface d {

    /* renamed from: a  reason: collision with root package name */
    public static final ByteBuffer f13237a = ByteBuffer.allocateDirect(0).order(ByteOrder.nativeOrder());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: e  reason: collision with root package name */
        public static final a f13238e = new a(-1, -1, -1);

        /* renamed from: a  reason: collision with root package name */
        public final int f13239a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13240b;

        /* renamed from: c  reason: collision with root package name */
        public final int f13241c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13242d;

        public a(int i10, int i11, int i12) {
            int i13;
            this.f13239a = i10;
            this.f13240b = i11;
            this.f13241c = i12;
            if (w0.E0(i12)) {
                i13 = w0.i0(i12, i11);
            } else {
                i13 = -1;
            }
            this.f13242d = i13;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f13239a == aVar.f13239a && this.f13240b == aVar.f13240b && this.f13241c == aVar.f13241c) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return ii.j.b(Integer.valueOf(this.f13239a), Integer.valueOf(this.f13240b), Integer.valueOf(this.f13241c));
        }

        public String toString() {
            return "AudioFormat[sampleRate=" + this.f13239a + ", channelCount=" + this.f13240b + ", encoding=" + this.f13241c + ']';
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

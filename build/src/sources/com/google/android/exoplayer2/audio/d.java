package com.google.android.exoplayer2.audio;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface d {

    /* renamed from: a  reason: collision with root package name */
    public static final ByteBuffer f12866a = ByteBuffer.allocateDirect(0).order(ByteOrder.nativeOrder());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: e  reason: collision with root package name */
        public static final a f12867e = new a(-1, -1, -1);

        /* renamed from: a  reason: collision with root package name */
        public final int f12868a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12869b;

        /* renamed from: c  reason: collision with root package name */
        public final int f12870c;

        /* renamed from: d  reason: collision with root package name */
        public final int f12871d;

        public a(int i10, int i11, int i12) {
            int i13;
            this.f12868a = i10;
            this.f12869b = i11;
            this.f12870c = i12;
            if (w0.E0(i12)) {
                i13 = w0.i0(i12, i11);
            } else {
                i13 = -1;
            }
            this.f12871d = i13;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f12868a == aVar.f12868a && this.f12869b == aVar.f12869b && this.f12870c == aVar.f12870c) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return ii.j.b(Integer.valueOf(this.f12868a), Integer.valueOf(this.f12869b), Integer.valueOf(this.f12870c));
        }

        public String toString() {
            return "AudioFormat[sampleRate=" + this.f12868a + ", channelCount=" + this.f12869b + ", encoding=" + this.f12870c + ']';
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

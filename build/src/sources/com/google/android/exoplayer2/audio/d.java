package com.google.android.exoplayer2.audio;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface d {

    /* renamed from: a  reason: collision with root package name */
    public static final ByteBuffer f12258a = ByteBuffer.allocateDirect(0).order(ByteOrder.nativeOrder());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: e  reason: collision with root package name */
        public static final a f12259e = new a(-1, -1, -1);

        /* renamed from: a  reason: collision with root package name */
        public final int f12260a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12261b;

        /* renamed from: c  reason: collision with root package name */
        public final int f12262c;

        /* renamed from: d  reason: collision with root package name */
        public final int f12263d;

        public a(int i10, int i11, int i12) {
            int i13;
            this.f12260a = i10;
            this.f12261b = i11;
            this.f12262c = i12;
            if (w0.E0(i12)) {
                i13 = w0.i0(i12, i11);
            } else {
                i13 = -1;
            }
            this.f12263d = i13;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f12260a == aVar.f12260a && this.f12261b == aVar.f12261b && this.f12262c == aVar.f12262c) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return ni.j.b(Integer.valueOf(this.f12260a), Integer.valueOf(this.f12261b), Integer.valueOf(this.f12262c));
        }

        public String toString() {
            return "AudioFormat[sampleRate=" + this.f12260a + ", channelCount=" + this.f12261b + ", encoding=" + this.f12262c + ']';
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

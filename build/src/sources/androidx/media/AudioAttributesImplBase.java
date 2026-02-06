package androidx.media;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBase implements AudioAttributesImpl {

    /* renamed from: a  reason: collision with root package name */
    public int f5044a = 0;

    /* renamed from: b  reason: collision with root package name */
    public int f5045b = 0;

    /* renamed from: c  reason: collision with root package name */
    public int f5046c = 0;

    /* renamed from: d  reason: collision with root package name */
    public int f5047d = -1;

    public int a() {
        return this.f5045b;
    }

    public int b() {
        int i10 = this.f5046c;
        int c10 = c();
        if (c10 == 6) {
            i10 |= 4;
        } else if (c10 == 7) {
            i10 |= 1;
        }
        return i10 & 273;
    }

    public int c() {
        int i10 = this.f5047d;
        if (i10 != -1) {
            return i10;
        }
        return AudioAttributesCompat.a(false, this.f5046c, this.f5044a);
    }

    public int d() {
        return this.f5044a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof AudioAttributesImplBase)) {
            return false;
        }
        AudioAttributesImplBase audioAttributesImplBase = (AudioAttributesImplBase) obj;
        if (this.f5045b != audioAttributesImplBase.a() || this.f5046c != audioAttributesImplBase.b() || this.f5044a != audioAttributesImplBase.d() || this.f5047d != audioAttributesImplBase.f5047d) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f5045b), Integer.valueOf(this.f5046c), Integer.valueOf(this.f5044a), Integer.valueOf(this.f5047d)});
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("AudioAttributesCompat:");
        if (this.f5047d != -1) {
            sb2.append(" stream=");
            sb2.append(this.f5047d);
            sb2.append(" derived");
        }
        sb2.append(" usage=");
        sb2.append(AudioAttributesCompat.b(this.f5044a));
        sb2.append(" content=");
        sb2.append(this.f5045b);
        sb2.append(" flags=0x");
        sb2.append(Integer.toHexString(this.f5046c).toUpperCase());
        return sb2.toString();
    }
}

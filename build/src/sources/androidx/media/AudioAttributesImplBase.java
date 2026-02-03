package androidx.media;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBase implements AudioAttributesImpl {

    /* renamed from: a  reason: collision with root package name */
    public int f4603a = 0;

    /* renamed from: b  reason: collision with root package name */
    public int f4604b = 0;

    /* renamed from: c  reason: collision with root package name */
    public int f4605c = 0;

    /* renamed from: d  reason: collision with root package name */
    public int f4606d = -1;

    public int a() {
        return this.f4604b;
    }

    public int b() {
        int i10 = this.f4605c;
        int c10 = c();
        if (c10 == 6) {
            i10 |= 4;
        } else if (c10 == 7) {
            i10 |= 1;
        }
        return i10 & 273;
    }

    public int c() {
        int i10 = this.f4606d;
        if (i10 != -1) {
            return i10;
        }
        return AudioAttributesCompat.a(false, this.f4605c, this.f4603a);
    }

    public int d() {
        return this.f4603a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof AudioAttributesImplBase)) {
            return false;
        }
        AudioAttributesImplBase audioAttributesImplBase = (AudioAttributesImplBase) obj;
        if (this.f4604b != audioAttributesImplBase.a() || this.f4605c != audioAttributesImplBase.b() || this.f4603a != audioAttributesImplBase.d() || this.f4606d != audioAttributesImplBase.f4606d) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f4604b), Integer.valueOf(this.f4605c), Integer.valueOf(this.f4603a), Integer.valueOf(this.f4606d)});
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("AudioAttributesCompat:");
        if (this.f4606d != -1) {
            sb2.append(" stream=");
            sb2.append(this.f4606d);
            sb2.append(" derived");
        }
        sb2.append(" usage=");
        sb2.append(AudioAttributesCompat.b(this.f4603a));
        sb2.append(" content=");
        sb2.append(this.f4604b);
        sb2.append(" flags=0x");
        sb2.append(Integer.toHexString(this.f4605c).toUpperCase());
        return sb2.toString();
    }
}

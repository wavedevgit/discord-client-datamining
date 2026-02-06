package androidx.media;

import android.media.AudioAttributes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplApi21 implements AudioAttributesImpl {

    /* renamed from: a  reason: collision with root package name */
    public AudioAttributes f5042a;

    /* renamed from: b  reason: collision with root package name */
    public int f5043b = -1;

    public boolean equals(Object obj) {
        if (!(obj instanceof AudioAttributesImplApi21)) {
            return false;
        }
        return this.f5042a.equals(((AudioAttributesImplApi21) obj).f5042a);
    }

    public int hashCode() {
        return this.f5042a.hashCode();
    }

    public String toString() {
        return "AudioAttributesCompat: audioattributes=" + this.f5042a;
    }
}

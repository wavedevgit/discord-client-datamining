package androidx.media;

import android.media.AudioAttributes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplApi21 implements AudioAttributesImpl {

    /* renamed from: a  reason: collision with root package name */
    public AudioAttributes f4588a;

    /* renamed from: b  reason: collision with root package name */
    public int f4589b = -1;

    public boolean equals(Object obj) {
        if (!(obj instanceof AudioAttributesImplApi21)) {
            return false;
        }
        return this.f4588a.equals(((AudioAttributesImplApi21) obj).f4588a);
    }

    public int hashCode() {
        return this.f4588a.hashCode();
    }

    public String toString() {
        return "AudioAttributesCompat: audioattributes=" + this.f4588a;
    }
}

package androidx.media;

import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBaseParcelizer {
    public static AudioAttributesImplBase read(a aVar) {
        AudioAttributesImplBase audioAttributesImplBase = new AudioAttributesImplBase();
        audioAttributesImplBase.f4590a = aVar.p(audioAttributesImplBase.f4590a, 1);
        audioAttributesImplBase.f4591b = aVar.p(audioAttributesImplBase.f4591b, 2);
        audioAttributesImplBase.f4592c = aVar.p(audioAttributesImplBase.f4592c, 3);
        audioAttributesImplBase.f4593d = aVar.p(audioAttributesImplBase.f4593d, 4);
        return audioAttributesImplBase;
    }

    public static void write(AudioAttributesImplBase audioAttributesImplBase, a aVar) {
        aVar.x(false, false);
        aVar.F(audioAttributesImplBase.f4590a, 1);
        aVar.F(audioAttributesImplBase.f4591b, 2);
        aVar.F(audioAttributesImplBase.f4592c, 3);
        aVar.F(audioAttributesImplBase.f4593d, 4);
    }
}

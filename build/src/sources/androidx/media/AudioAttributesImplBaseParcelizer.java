package androidx.media;

import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBaseParcelizer {
    public static AudioAttributesImplBase read(a aVar) {
        AudioAttributesImplBase audioAttributesImplBase = new AudioAttributesImplBase();
        audioAttributesImplBase.f4741a = aVar.p(audioAttributesImplBase.f4741a, 1);
        audioAttributesImplBase.f4742b = aVar.p(audioAttributesImplBase.f4742b, 2);
        audioAttributesImplBase.f4743c = aVar.p(audioAttributesImplBase.f4743c, 3);
        audioAttributesImplBase.f4744d = aVar.p(audioAttributesImplBase.f4744d, 4);
        return audioAttributesImplBase;
    }

    public static void write(AudioAttributesImplBase audioAttributesImplBase, a aVar) {
        aVar.x(false, false);
        aVar.F(audioAttributesImplBase.f4741a, 1);
        aVar.F(audioAttributesImplBase.f4742b, 2);
        aVar.F(audioAttributesImplBase.f4743c, 3);
        aVar.F(audioAttributesImplBase.f4744d, 4);
    }
}

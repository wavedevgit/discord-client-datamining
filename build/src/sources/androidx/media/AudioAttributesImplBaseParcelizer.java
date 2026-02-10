package androidx.media;

import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBaseParcelizer {
    public static AudioAttributesImplBase read(a aVar) {
        AudioAttributesImplBase audioAttributesImplBase = new AudioAttributesImplBase();
        audioAttributesImplBase.f4751a = aVar.p(audioAttributesImplBase.f4751a, 1);
        audioAttributesImplBase.f4752b = aVar.p(audioAttributesImplBase.f4752b, 2);
        audioAttributesImplBase.f4753c = aVar.p(audioAttributesImplBase.f4753c, 3);
        audioAttributesImplBase.f4754d = aVar.p(audioAttributesImplBase.f4754d, 4);
        return audioAttributesImplBase;
    }

    public static void write(AudioAttributesImplBase audioAttributesImplBase, a aVar) {
        aVar.x(false, false);
        aVar.F(audioAttributesImplBase.f4751a, 1);
        aVar.F(audioAttributesImplBase.f4752b, 2);
        aVar.F(audioAttributesImplBase.f4753c, 3);
        aVar.F(audioAttributesImplBase.f4754d, 4);
    }
}

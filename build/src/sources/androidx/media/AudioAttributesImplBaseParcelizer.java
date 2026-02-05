package androidx.media;

import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBaseParcelizer {
    public static AudioAttributesImplBase read(a aVar) {
        AudioAttributesImplBase audioAttributesImplBase = new AudioAttributesImplBase();
        audioAttributesImplBase.f4715a = aVar.p(audioAttributesImplBase.f4715a, 1);
        audioAttributesImplBase.f4716b = aVar.p(audioAttributesImplBase.f4716b, 2);
        audioAttributesImplBase.f4717c = aVar.p(audioAttributesImplBase.f4717c, 3);
        audioAttributesImplBase.f4718d = aVar.p(audioAttributesImplBase.f4718d, 4);
        return audioAttributesImplBase;
    }

    public static void write(AudioAttributesImplBase audioAttributesImplBase, a aVar) {
        aVar.x(false, false);
        aVar.F(audioAttributesImplBase.f4715a, 1);
        aVar.F(audioAttributesImplBase.f4716b, 2);
        aVar.F(audioAttributesImplBase.f4717c, 3);
        aVar.F(audioAttributesImplBase.f4718d, 4);
    }
}

package androidx.media;

import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBaseParcelizer {
    public static AudioAttributesImplBase read(a aVar) {
        AudioAttributesImplBase audioAttributesImplBase = new AudioAttributesImplBase();
        audioAttributesImplBase.f4603a = aVar.p(audioAttributesImplBase.f4603a, 1);
        audioAttributesImplBase.f4604b = aVar.p(audioAttributesImplBase.f4604b, 2);
        audioAttributesImplBase.f4605c = aVar.p(audioAttributesImplBase.f4605c, 3);
        audioAttributesImplBase.f4606d = aVar.p(audioAttributesImplBase.f4606d, 4);
        return audioAttributesImplBase;
    }

    public static void write(AudioAttributesImplBase audioAttributesImplBase, a aVar) {
        aVar.x(false, false);
        aVar.F(audioAttributesImplBase.f4603a, 1);
        aVar.F(audioAttributesImplBase.f4604b, 2);
        aVar.F(audioAttributesImplBase.f4605c, 3);
        aVar.F(audioAttributesImplBase.f4606d, 4);
    }
}

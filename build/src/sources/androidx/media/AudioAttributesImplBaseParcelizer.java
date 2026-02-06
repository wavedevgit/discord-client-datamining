package androidx.media;

import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBaseParcelizer {
    public static AudioAttributesImplBase read(a aVar) {
        AudioAttributesImplBase audioAttributesImplBase = new AudioAttributesImplBase();
        audioAttributesImplBase.f5044a = aVar.p(audioAttributesImplBase.f5044a, 1);
        audioAttributesImplBase.f5045b = aVar.p(audioAttributesImplBase.f5045b, 2);
        audioAttributesImplBase.f5046c = aVar.p(audioAttributesImplBase.f5046c, 3);
        audioAttributesImplBase.f5047d = aVar.p(audioAttributesImplBase.f5047d, 4);
        return audioAttributesImplBase;
    }

    public static void write(AudioAttributesImplBase audioAttributesImplBase, a aVar) {
        aVar.x(false, false);
        aVar.F(audioAttributesImplBase.f5044a, 1);
        aVar.F(audioAttributesImplBase.f5045b, 2);
        aVar.F(audioAttributesImplBase.f5046c, 3);
        aVar.F(audioAttributesImplBase.f5047d, 4);
    }
}

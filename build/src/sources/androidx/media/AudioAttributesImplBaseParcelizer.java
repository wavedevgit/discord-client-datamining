package androidx.media;

import androidx.versionedparcelable.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AudioAttributesImplBaseParcelizer {
    public static AudioAttributesImplBase read(a aVar) {
        AudioAttributesImplBase audioAttributesImplBase = new AudioAttributesImplBase();
        audioAttributesImplBase.f4634a = aVar.p(audioAttributesImplBase.f4634a, 1);
        audioAttributesImplBase.f4635b = aVar.p(audioAttributesImplBase.f4635b, 2);
        audioAttributesImplBase.f4636c = aVar.p(audioAttributesImplBase.f4636c, 3);
        audioAttributesImplBase.f4637d = aVar.p(audioAttributesImplBase.f4637d, 4);
        return audioAttributesImplBase;
    }

    public static void write(AudioAttributesImplBase audioAttributesImplBase, a aVar) {
        aVar.x(false, false);
        aVar.F(audioAttributesImplBase.f4634a, 1);
        aVar.F(audioAttributesImplBase.f4635b, 2);
        aVar.F(audioAttributesImplBase.f4636c, 3);
        aVar.F(audioAttributesImplBase.f4637d, 4);
    }
}

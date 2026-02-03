package pn;

import android.media.AudioRecord;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final List f46226a = CollectionsKt.o(48000, 44100, 22050, 16000, 11025, 8000);

    public static final c a() {
        Iterator it = f46226a.iterator();
        while (true) {
            AudioRecord audioRecord = null;
            if (!it.hasNext()) {
                return null;
            }
            int intValue = ((Number) it.next()).intValue();
            try {
                int minBufferSize = AudioRecord.getMinBufferSize(intValue, 16, 2);
                if (minBufferSize != -2) {
                    AudioRecord audioRecord2 = new AudioRecord(1, intValue, 16, 2, minBufferSize);
                    try {
                        if (audioRecord2.getState() == 1) {
                            audioRecord2.release();
                            c cVar = new c(intValue, 16, 2, minBufferSize);
                            audioRecord2.release();
                            return cVar;
                        }
                        audioRecord2.release();
                    } catch (IllegalArgumentException unused) {
                        audioRecord = audioRecord2;
                        if (audioRecord != null) {
                            audioRecord.release();
                        }
                    } catch (SecurityException unused2) {
                        audioRecord = audioRecord2;
                        if (audioRecord != null) {
                            audioRecord.release();
                        }
                    } catch (Throwable th2) {
                        th = th2;
                        audioRecord = audioRecord2;
                        if (audioRecord != null) {
                            audioRecord.release();
                        }
                        throw th;
                    }
                }
            } catch (IllegalArgumentException unused3) {
            } catch (SecurityException unused4) {
            } catch (Throwable th3) {
                th = th3;
            }
        }
    }
}

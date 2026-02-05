package va;

import android.util.SparseIntArray;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    public static final l f51946a = new l();

    private l() {
    }

    public static final z a() {
        SparseIntArray sparseIntArray = new SparseIntArray();
        sparseIntArray.put(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, 5);
        sparseIntArray.put(RecyclerView.ItemAnimator.FLAG_MOVED, 5);
        sparseIntArray.put(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 5);
        sparseIntArray.put(8192, 5);
        sparseIntArray.put(16384, 5);
        sparseIntArray.put(PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS, 5);
        sparseIntArray.put(65536, 5);
        sparseIntArray.put(131072, 5);
        sparseIntArray.put(262144, 2);
        sparseIntArray.put(524288, 2);
        sparseIntArray.put(1048576, 2);
        l lVar = f51946a;
        return new z(lVar.c(), lVar.b(), sparseIntArray);
    }

    private final int b() {
        int min = (int) Math.min(Runtime.getRuntime().maxMemory(), 2147483647L);
        if (min < 16777216) {
            return min / 2;
        }
        return (min / 4) * 3;
    }

    private final int c() {
        int min = (int) Math.min(Runtime.getRuntime().maxMemory(), 2147483647L);
        if (min < 16777216) {
            return 3145728;
        }
        if (min < 33554432) {
            return 6291456;
        }
        return 12582912;
    }
}

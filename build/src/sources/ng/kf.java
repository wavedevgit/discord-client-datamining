package ng;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum kf implements n2 {
    FORMAT_UNKNOWN(0),
    FORMAT_CODE_128(1),
    FORMAT_CODE_39(2),
    FORMAT_CODE_93(4),
    FORMAT_CODABAR(8),
    FORMAT_DATA_MATRIX(16),
    FORMAT_EAN_13(32),
    FORMAT_EAN_8(64),
    FORMAT_ITF(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT),
    FORMAT_QR_CODE(IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER),
    FORMAT_UPC_A(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING),
    FORMAT_UPC_E(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET),
    FORMAT_PDF417(RecyclerView.ItemAnimator.FLAG_MOVED),
    FORMAT_AZTEC(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f40079d;

    kf(int i10) {
        this.f40079d = i10;
    }

    @Override // ng.n2
    public final int zza() {
        return this.f40079d;
    }
}

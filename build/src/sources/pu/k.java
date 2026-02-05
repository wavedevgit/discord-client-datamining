package pu;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {
    public static final byte[] a(String str) {
        int i10;
        char charAt;
        Intrinsics.checkNotNullParameter(str, "<this>");
        byte[] bArr = new byte[str.length() * 4];
        int length = str.length();
        int i11 = 0;
        while (i11 < length) {
            char charAt2 = str.charAt(i11);
            if (Intrinsics.compare((int) charAt2, (int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) >= 0) {
                int length2 = str.length();
                int i12 = i11;
                while (i11 < length2) {
                    char charAt3 = str.charAt(i11);
                    if (Intrinsics.compare((int) charAt3, (int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) < 0) {
                        int i13 = i12 + 1;
                        bArr[i12] = (byte) charAt3;
                        i11++;
                        while (true) {
                            i12 = i13;
                            if (i11 < length2 && Intrinsics.compare((int) str.charAt(i11), (int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) < 0) {
                                i13 = i12 + 1;
                                bArr[i12] = (byte) str.charAt(i11);
                                i11++;
                            }
                        }
                    } else {
                        if (Intrinsics.compare((int) charAt3, (int) RecyclerView.ItemAnimator.FLAG_MOVED) < 0) {
                            bArr[i12] = (byte) ((charAt3 >> 6) | 192);
                            i12 += 2;
                            bArr[i12 + 1] = (byte) ((charAt3 & '?') | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                        } else if (55296 <= charAt3 && charAt3 < 57344) {
                            if (Intrinsics.compare((int) charAt3, 56319) <= 0 && length2 > (i10 = i11 + 1) && 56320 <= (charAt = str.charAt(i10)) && charAt < 57344) {
                                int charAt4 = ((charAt3 << '\n') + str.charAt(i10)) - 56613888;
                                bArr[i12] = (byte) ((charAt4 >> 18) | 240);
                                bArr[i12 + 1] = (byte) (((charAt4 >> 12) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                bArr[i12 + 2] = (byte) (((charAt4 >> 6) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                i12 += 4;
                                bArr[i12 + 3] = (byte) ((charAt4 & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                                i11 += 2;
                            } else {
                                bArr[i12] = 63;
                                i11++;
                                i12++;
                            }
                        } else {
                            bArr[i12] = (byte) ((charAt3 >> '\f') | 224);
                            bArr[i12 + 1] = (byte) (((charAt3 >> 6) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                            i12 += 3;
                            bArr[i12 + 2] = (byte) ((charAt3 & '?') | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                        }
                        i11++;
                    }
                }
                byte[] copyOf = Arrays.copyOf(bArr, i12);
                Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                return copyOf;
            }
            bArr[i11] = (byte) charAt2;
            i11++;
        }
        byte[] copyOf2 = Arrays.copyOf(bArr, str.length());
        Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
        return copyOf2;
    }
}

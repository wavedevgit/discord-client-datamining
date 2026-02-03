package c1;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.ShortCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public static final a f7949d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final short f7950e = d(5120);

    /* renamed from: i  reason: collision with root package name */
    private static final short f7951i = d(-1025);

    /* renamed from: o  reason: collision with root package name */
    private static final short f7952o = d(31743);

    /* renamed from: p  reason: collision with root package name */
    private static final short f7953p = d(1024);

    /* renamed from: q  reason: collision with root package name */
    private static final short f7954q = d(1);

    /* renamed from: r  reason: collision with root package name */
    private static final short f7955r = d(32256);

    /* renamed from: s  reason: collision with root package name */
    private static final short f7956s = d(-1024);

    /* renamed from: t  reason: collision with root package name */
    private static final short f7957t = d(ShortCompanionObject.MIN_VALUE);

    /* renamed from: u  reason: collision with root package name */
    private static final short f7958u = d(31744);

    /* renamed from: v  reason: collision with root package name */
    private static final short f7959v = d(0);

    /* renamed from: w  reason: collision with root package name */
    private static final short f7960w = a(1.0f);

    /* renamed from: x  reason: collision with root package name */
    private static final short f7961x = a(-1.0f);

    /* renamed from: y  reason: collision with root package name */
    private static final float f7962y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final short b(float f10) {
            int i10;
            int floatToRawIntBits = Float.floatToRawIntBits(f10);
            int i11 = floatToRawIntBits >>> 31;
            int i12 = (floatToRawIntBits >>> 23) & SetSpanOperation.SPAN_MAX_PRIORITY;
            int i13 = 8388607 & floatToRawIntBits;
            int i14 = 31;
            int i15 = 0;
            if (i12 == 255) {
                if (i13 != 0) {
                    i15 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            } else {
                int i16 = i12 - 112;
                if (i16 >= 31) {
                    i14 = 49;
                } else if (i16 <= 0) {
                    if (i16 >= -10) {
                        int i17 = (8388608 | i13) >> (1 - i16);
                        if ((i17 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                            i17 += 8192;
                        }
                        i14 = 0;
                        i15 = i17 >> 13;
                    } else {
                        i14 = 0;
                    }
                } else {
                    i15 = i13 >> 13;
                    if ((floatToRawIntBits & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                        i10 = (((i16 << 10) | i15) + 1) | (i11 << 15);
                        return (short) i10;
                    }
                    i14 = i16;
                }
            }
            i10 = (i11 << 15) | (i14 << 10) | i15;
            return (short) i10;
        }

        private a() {
        }
    }

    static {
        FloatCompanionObject floatCompanionObject = FloatCompanionObject.INSTANCE;
        f7962y = Float.intBitsToFloat(1056964608);
    }

    public static short a(float f10) {
        return d(f7949d.b(f10));
    }

    public static final float e(short s10) {
        int i10;
        int i11;
        int i12;
        int i13 = 32768 & s10;
        int i14 = ((65535 & s10) >>> 10) & 31;
        int i15 = s10 & 1023;
        if (i14 == 0) {
            if (i15 != 0) {
                FloatCompanionObject floatCompanionObject = FloatCompanionObject.INSTANCE;
                float intBitsToFloat = Float.intBitsToFloat(i15 + 1056964608) - f7962y;
                if (i13 == 0) {
                    return intBitsToFloat;
                }
                return -intBitsToFloat;
            }
            i12 = 0;
            i11 = 0;
        } else {
            int i16 = i15 << 13;
            if (i14 == 31) {
                i10 = SetSpanOperation.SPAN_MAX_PRIORITY;
                if (i16 != 0) {
                    i16 |= 4194304;
                }
            } else {
                i10 = i14 + 112;
            }
            int i17 = i10;
            i11 = i16;
            i12 = i17;
        }
        int i18 = (i12 << 23) | (i13 << 16) | i11;
        FloatCompanionObject floatCompanionObject2 = FloatCompanionObject.INSTANCE;
        return Float.intBitsToFloat(i18);
    }

    public static short d(short s10) {
        return s10;
    }
}

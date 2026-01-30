package kotlin.text;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.sequences.Sequence;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000^\n\u0002\u0010\u000e\n\u0002\u0010\u0019\n\u0002\u0010\f\n\u0002\b\u0005\n\u0002\u0010\r\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b3\n\u0002\u0010\u001e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\b\u0013\u001a\u001d\u0010\u0004\u001a\u00020\u0000*\u00020\u00002\n\u0010\u0003\u001a\u00020\u0001\"\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005\u001a\u001d\u0010\u0006\u001a\u00020\u0000*\u00020\u00002\n\u0010\u0003\u001a\u00020\u0001\"\u00020\u0002¢\u0006\u0004\b\u0006\u0010\u0005\u001a\u001d\u0010\u0007\u001a\u00020\u0000*\u00020\u00002\n\u0010\u0003\u001a\u00020\u0001\"\u00020\u0002¢\u0006\u0004\b\u0007\u0010\u0005\u001a\u0011\u0010\t\u001a\u00020\b*\u00020\b¢\u0006\u0004\b\t\u0010\n\u001a#\u0010\u000e\u001a\u00020\b*\u00020\b2\u0006\u0010\f\u001a\u00020\u000b2\b\b\u0002\u0010\r\u001a\u00020\u0002¢\u0006\u0004\b\u000e\u0010\u000f\u001a#\u0010\u0010\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\f\u001a\u00020\u000b2\b\b\u0002\u0010\r\u001a\u00020\u0002¢\u0006\u0004\b\u0010\u0010\u0011\u001a\u0011\u0010\u0013\u001a\u00020\u0012*\u00020\b¢\u0006\u0004\b\u0013\u0010\u0014\u001a\u0019\u0010\u0017\u001a\u00020\u0000*\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0015¢\u0006\u0004\b\u0017\u0010\u0018\u001a#\u0010\u001b\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u00022\b\b\u0002\u0010\u001a\u001a\u00020\u0000¢\u0006\u0004\b\u001b\u0010\u001c\u001a#\u0010\u001d\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u001a\u001a\u00020\u0000¢\u0006\u0004\b\u001d\u0010\u001e\u001a#\u0010\u001f\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u00022\b\b\u0002\u0010\u001a\u001a\u00020\u0000¢\u0006\u0004\b\u001f\u0010\u001c\u001a#\u0010 \u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u001a\u001a\u00020\u0000¢\u0006\u0004\b \u0010\u001e\u001a#\u0010!\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u00022\b\b\u0002\u0010\u001a\u001a\u00020\u0000¢\u0006\u0004\b!\u0010\u001c\u001a#\u0010\"\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u001a\u001a\u00020\u0000¢\u0006\u0004\b\"\u0010\u001e\u001a#\u0010#\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u00022\b\b\u0002\u0010\u001a\u001a\u00020\u0000¢\u0006\u0004\b#\u0010\u001c\u001a#\u0010$\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u001a\u001a\u00020\u0000¢\u0006\u0004\b$\u0010\u001e\u001a)\u0010(\u001a\u00020\b*\u00020\b2\u0006\u0010%\u001a\u00020\u000b2\u0006\u0010&\u001a\u00020\u000b2\u0006\u0010'\u001a\u00020\b¢\u0006\u0004\b(\u0010)\u001a!\u0010*\u001a\u00020\b*\u00020\b2\u0006\u0010%\u001a\u00020\u000b2\u0006\u0010&\u001a\u00020\u000b¢\u0006\u0004\b*\u0010+\u001a\u0019\u0010-\u001a\u00020\u0000*\u00020\u00002\u0006\u0010,\u001a\u00020\b¢\u0006\u0004\b-\u0010.\u001a\u0019\u00100\u001a\u00020\u0000*\u00020\u00002\u0006\u0010/\u001a\u00020\b¢\u0006\u0004\b0\u0010.\u001a!\u00101\u001a\u00020\u0000*\u00020\u00002\u0006\u0010,\u001a\u00020\b2\u0006\u0010/\u001a\u00020\b¢\u0006\u0004\b1\u00102\u001a\u0019\u00103\u001a\u00020\u0000*\u00020\u00002\u0006\u0010\u0019\u001a\u00020\b¢\u0006\u0004\b3\u0010.\u001a;\u00108\u001a\u00020\u0012*\u00020\b2\u0006\u00104\u001a\u00020\u000b2\u0006\u00105\u001a\u00020\b2\u0006\u00106\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u00107\u001a\u00020\u0012H\u0000¢\u0006\u0004\b8\u00109\u001a#\u0010;\u001a\u00020\u0012*\u00020\b2\u0006\u0010:\u001a\u00020\u00022\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\b;\u0010<\u001a#\u0010=\u001a\u00020\u0012*\u00020\b2\u0006\u0010:\u001a\u00020\u00022\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\b=\u0010<\u001a#\u0010>\u001a\u00020\u0012*\u00020\b2\u0006\u0010,\u001a\u00020\b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\b>\u0010?\u001a+\u0010@\u001a\u00020\u0012*\u00020\b2\u0006\u0010,\u001a\u00020\b2\u0006\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\b@\u0010A\u001a#\u0010B\u001a\u00020\u0012*\u00020\b2\u0006\u0010/\u001a\u00020\b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\bB\u0010?\u001a-\u0010C\u001a\u00020\u000b*\u00020\b2\u0006\u0010\u0003\u001a\u00020\u00012\b\b\u0002\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\bC\u0010D\u001a-\u0010E\u001a\u00020\u000b*\u00020\b2\u0006\u0010\u0003\u001a\u00020\u00012\b\b\u0002\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\bE\u0010D\u001a=\u0010G\u001a\u00020\u000b*\u00020\b2\u0006\u00105\u001a\u00020\b2\u0006\u0010%\u001a\u00020\u000b2\u0006\u0010&\u001a\u00020\u000b2\u0006\u00107\u001a\u00020\u00122\b\b\u0002\u0010F\u001a\u00020\u0012H\u0002¢\u0006\u0004\bG\u0010H\u001aG\u0010L\u001a\u0010\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u0000\u0018\u00010K*\u00020\b2\f\u0010J\u001a\b\u0012\u0004\u0012\u00020\u00000I2\u0006\u0010%\u001a\u00020\u000b2\u0006\u00107\u001a\u00020\u00122\u0006\u0010F\u001a\u00020\u0012H\u0002¢\u0006\u0004\bL\u0010M\u001a-\u0010N\u001a\u00020\u000b*\u00020\b2\u0006\u0010:\u001a\u00020\u00022\b\b\u0002\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\bN\u0010O\u001a-\u0010Q\u001a\u00020\u000b*\u00020\b2\u0006\u0010P\u001a\u00020\u00002\b\b\u0002\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\bQ\u0010R\u001a-\u0010S\u001a\u00020\u000b*\u00020\b2\u0006\u0010:\u001a\u00020\u00022\b\b\u0002\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\bS\u0010O\u001a-\u0010T\u001a\u00020\u000b*\u00020\b2\u0006\u0010P\u001a\u00020\u00002\b\b\u0002\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u0012¢\u0006\u0004\bT\u0010R\u001a&\u0010U\u001a\u00020\u0012*\u00020\b2\u0006\u00105\u001a\u00020\b2\b\b\u0002\u00107\u001a\u00020\u0012H\u0086\u0002¢\u0006\u0004\bU\u0010?\u001a&\u0010V\u001a\u00020\u0012*\u00020\b2\u0006\u0010:\u001a\u00020\u00022\b\b\u0002\u00107\u001a\u00020\u0012H\u0086\u0002¢\u0006\u0004\bV\u0010<\u001a?\u0010Z\u001a\b\u0012\u0004\u0012\u00020\u00150Y*\u00020\b2\u0006\u0010W\u001a\u00020\u00012\b\b\u0002\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u00122\b\b\u0002\u0010X\u001a\u00020\u000bH\u0002¢\u0006\u0004\bZ\u0010[\u001aG\u0010]\u001a\b\u0012\u0004\u0012\u00020\u00150Y*\u00020\b2\u000e\u0010W\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00000\\2\b\b\u0002\u0010%\u001a\u00020\u000b2\b\b\u0002\u00107\u001a\u00020\u00122\b\b\u0002\u0010X\u001a\u00020\u000bH\u0002¢\u0006\u0004\b]\u0010^\u001a\u0017\u0010`\u001a\u00020_2\u0006\u0010X\u001a\u00020\u000bH\u0000¢\u0006\u0004\b`\u0010a\u001a?\u0010c\u001a\b\u0012\u0004\u0012\u00020\u00000b*\u00020\b2\u0012\u0010W\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00000\\\"\u00020\u00002\b\b\u0002\u00107\u001a\u00020\u00122\b\b\u0002\u0010X\u001a\u00020\u000b¢\u0006\u0004\bc\u0010d\u001a7\u0010e\u001a\b\u0012\u0004\u0012\u00020\u00000b*\u00020\b2\n\u0010W\u001a\u00020\u0001\"\u00020\u00022\b\b\u0002\u00107\u001a\u00020\u00122\b\b\u0002\u0010X\u001a\u00020\u000b¢\u0006\u0004\be\u0010f\u001a1\u0010g\u001a\b\u0012\u0004\u0012\u00020\u00000b*\u00020\b2\u0006\u0010\u0019\u001a\u00020\u00002\u0006\u00107\u001a\u00020\u00122\u0006\u0010X\u001a\u00020\u000bH\u0002¢\u0006\u0004\bg\u0010h\u001a\u0017\u0010i\u001a\b\u0012\u0004\u0012\u00020\u00000Y*\u00020\b¢\u0006\u0004\bi\u0010j\u001a\u0017\u0010k\u001a\b\u0012\u0004\u0012\u00020\u00000b*\u00020\b¢\u0006\u0004\bk\u0010l\u001a\u0015\u0010m\u001a\u0004\u0018\u00010\u0012*\u00020\u0000H\u0007¢\u0006\u0004\bm\u0010n\"\u0015\u0010q\u001a\u00020\u0015*\u00020\b8F¢\u0006\u0006\u001a\u0004\bo\u0010p\"\u0015\u0010t\u001a\u00020\u000b*\u00020\b8F¢\u0006\u0006\u001a\u0004\br\u0010s¨\u0006u"}, d2 = {"", "", "", "chars", "l1", "(Ljava/lang/String;[C)Ljava/lang/String;", "n1", "m1", "", "k1", "(Ljava/lang/CharSequence;)Ljava/lang/CharSequence;", "", "length", "padChar", "s0", "(Ljava/lang/CharSequence;IC)Ljava/lang/CharSequence;", "t0", "(Ljava/lang/String;IC)Ljava/lang/String;", "", "k0", "(Ljava/lang/CharSequence;)Z", "Lkotlin/ranges/IntRange;", "range", "S0", "(Ljava/lang/CharSequence;Lkotlin/ranges/IntRange;)Ljava/lang/String;", "delimiter", "missingDelimiterValue", "b1", "(Ljava/lang/String;CLjava/lang/String;)Ljava/lang/String;", "c1", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", "T0", "U0", "f1", "g1", "X0", "Y0", "startIndex", "endIndex", "replacement", "G0", "(Ljava/lang/CharSequence;IILjava/lang/CharSequence;)Ljava/lang/CharSequence;", "C0", "(Ljava/lang/CharSequence;II)Ljava/lang/CharSequence;", "prefix", "B0", "(Ljava/lang/String;Ljava/lang/CharSequence;)Ljava/lang/String;", "suffix", "D0", "F0", "(Ljava/lang/String;Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;", "E0", "thisOffset", "other", "otherOffset", "ignoreCase", "A0", "(Ljava/lang/CharSequence;ILjava/lang/CharSequence;IIZ)Z", "char", "M0", "(Ljava/lang/CharSequence;CZ)Z", "W", "O0", "(Ljava/lang/CharSequence;Ljava/lang/CharSequence;Z)Z", "N0", "(Ljava/lang/CharSequence;Ljava/lang/CharSequence;IZ)Z", "X", "j0", "(Ljava/lang/CharSequence;[CIZ)I", "p0", "last", "f0", "(Ljava/lang/CharSequence;Ljava/lang/CharSequence;IIZZ)I", "", "strings", "Lkotlin/Pair;", "a0", "(Ljava/lang/CharSequence;Ljava/util/Collection;IZZ)Lkotlin/Pair;", "d0", "(Ljava/lang/CharSequence;CIZ)I", InquiryField.StringField.TYPE, "e0", "(Ljava/lang/CharSequence;Ljava/lang/String;IZ)I", "l0", "m0", "T", "S", "delimiters", "limit", "Lkotlin/sequences/Sequence;", "u0", "(Ljava/lang/CharSequence;[CIZI)Lkotlin/sequences/Sequence;", "", "v0", "(Ljava/lang/CharSequence;[Ljava/lang/String;IZI)Lkotlin/sequences/Sequence;", "", "H0", "(I)V", "", "J0", "(Ljava/lang/CharSequence;[Ljava/lang/String;ZI)Ljava/util/List;", "I0", "(Ljava/lang/CharSequence;[CZI)Ljava/util/List;", "K0", "(Ljava/lang/CharSequence;Ljava/lang/String;ZI)Ljava/util/List;", "q0", "(Ljava/lang/CharSequence;)Lkotlin/sequences/Sequence;", "r0", "(Ljava/lang/CharSequence;)Ljava/util/List;", "j1", "(Ljava/lang/String;)Ljava/lang/Boolean;", "b0", "(Ljava/lang/CharSequence;)Lkotlin/ranges/IntRange;", "indices", "c0", "(Ljava/lang/CharSequence;)I", "lastIndex", "kotlin-stdlib"}, k = 5, mv = {2, 1, 0}, xi = ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE, xs = "kotlin/text/StringsKt")
@SourceDebugExtension({"SMAP\nStrings.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Strings.kt\nkotlin/text/StringsKt__StringsKt\n+ 2 _Strings.kt\nkotlin/text/StringsKt___StringsKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 5 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,1579:1\n80#1,22:1580\n114#1,5:1602\n131#1,5:1607\n80#1,22:1612\n108#1:1634\n80#1,22:1635\n114#1,5:1657\n125#1:1662\n114#1,5:1663\n131#1,5:1668\n142#1:1673\n131#1,5:1674\n80#1,22:1679\n114#1,5:1701\n131#1,5:1706\n1069#2,2:1711\n12717#3,2:1713\n12717#3,2:1715\n295#4,2:1717\n295#4,2:1719\n1563#4:1722\n1634#4,3:1723\n1563#4:1726\n1634#4,3:1727\n1#5:1721\n*S KotlinDebug\n*F\n+ 1 Strings.kt\nkotlin/text/StringsKt__StringsKt\n*L\n108#1:1580,22\n125#1:1602,5\n142#1:1607,5\n147#1:1612,22\n152#1:1634\n152#1:1635,22\n157#1:1657,5\n162#1:1662\n162#1:1663,5\n167#1:1668,5\n172#1:1673\n172#1:1674,5\n177#1:1679,22\n188#1:1701,5\n199#1:1706,5\n312#1:1711,2\n971#1:1713,2\n995#1:1715,2\n1034#1:1717,2\n1040#1:1719,2\n1401#1:1722\n1401#1:1723,3\n1426#1:1726\n1426#1:1727,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class StringsKt__StringsKt extends w {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Sequence {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CharSequence f36224a;

        public a(CharSequence charSequence) {
            this.f36224a = charSequence;
        }

        @Override // kotlin.sequences.Sequence
        public Iterator iterator() {
            return new g(this.f36224a);
        }
    }

    public static final boolean A0(CharSequence charSequence, int i10, CharSequence other, int i11, int i12, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        if (i11 < 0 || i10 < 0 || i10 > charSequence.length() - i12 || i11 > other.length() - i12) {
            return false;
        }
        for (int i13 = 0; i13 < i12; i13++) {
            if (!kotlin.text.a.c(charSequence.charAt(i10 + i13), other.charAt(i11 + i13), z10)) {
                return false;
            }
        }
        return true;
    }

    public static String B0(String str, CharSequence prefix) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        if (R0(str, prefix, false, 2, null)) {
            String substring = str.substring(prefix.length());
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            return substring;
        }
        return str;
    }

    public static CharSequence C0(CharSequence charSequence, int i10, int i11) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        if (i11 >= i10) {
            if (i11 == i10) {
                return charSequence.subSequence(0, charSequence.length());
            }
            StringBuilder sb2 = new StringBuilder(charSequence.length() - (i11 - i10));
            sb2.append(charSequence, 0, i10);
            Intrinsics.checkNotNullExpressionValue(sb2, "append(...)");
            sb2.append(charSequence, i11, charSequence.length());
            Intrinsics.checkNotNullExpressionValue(sb2, "append(...)");
            return sb2;
        }
        throw new IndexOutOfBoundsException("End index (" + i11 + ") is less than start index (" + i10 + ").");
    }

    public static String D0(String str, CharSequence suffix) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(suffix, "suffix");
        if (Z(str, suffix, false, 2, null)) {
            String substring = str.substring(0, str.length() - suffix.length());
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            return substring;
        }
        return str;
    }

    public static String E0(String str, CharSequence delimiter) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(delimiter, "delimiter");
        return F0(str, delimiter, delimiter);
    }

    public static final String F0(String str, CharSequence prefix, CharSequence suffix) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(suffix, "suffix");
        if (str.length() >= prefix.length() + suffix.length() && R0(str, prefix, false, 2, null) && Z(str, suffix, false, 2, null)) {
            String substring = str.substring(prefix.length(), str.length() - suffix.length());
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            return substring;
        }
        return str;
    }

    public static CharSequence G0(CharSequence charSequence, int i10, int i11, CharSequence replacement) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(replacement, "replacement");
        if (i11 >= i10) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(charSequence, 0, i10);
            Intrinsics.checkNotNullExpressionValue(sb2, "append(...)");
            sb2.append(replacement);
            sb2.append(charSequence, i11, charSequence.length());
            Intrinsics.checkNotNullExpressionValue(sb2, "append(...)");
            return sb2;
        }
        throw new IndexOutOfBoundsException("End index (" + i11 + ") is less than start index (" + i10 + ").");
    }

    public static final void H0(int i10) {
        if (i10 >= 0) {
            return;
        }
        throw new IllegalArgumentException(("Limit must be non-negative, but was " + i10).toString());
    }

    public static final List I0(CharSequence charSequence, char[] delimiters, boolean z10, int i10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        if (delimiters.length == 1) {
            return K0(charSequence, String.valueOf(delimiters[0]), z10, i10);
        }
        Iterable<IntRange> z11 = kotlin.sequences.k.z(w0(charSequence, delimiters, 0, z10, i10, 2, null));
        ArrayList arrayList = new ArrayList(CollectionsKt.w(z11, 10));
        for (IntRange intRange : z11) {
            arrayList.add(S0(charSequence, intRange));
        }
        return arrayList;
    }

    public static final List J0(CharSequence charSequence, String[] delimiters, boolean z10, int i10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        if (delimiters.length == 1) {
            String str = delimiters[0];
            if (str.length() != 0) {
                return K0(charSequence, str, z10, i10);
            }
        }
        Iterable<IntRange> z11 = kotlin.sequences.k.z(x0(charSequence, delimiters, 0, z10, i10, 2, null));
        ArrayList arrayList = new ArrayList(CollectionsKt.w(z11, 10));
        for (IntRange intRange : z11) {
            arrayList.add(S0(charSequence, intRange));
        }
        return arrayList;
    }

    private static final List K0(CharSequence charSequence, String str, boolean z10, int i10) {
        boolean z11;
        H0(i10);
        int i11 = 0;
        int e02 = e0(charSequence, str, 0, z10);
        if (e02 != -1 && i10 != 1) {
            if (i10 > 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            int i12 = 10;
            if (z11) {
                i12 = kotlin.ranges.d.i(i10, 10);
            }
            ArrayList arrayList = new ArrayList(i12);
            do {
                arrayList.add(charSequence.subSequence(i11, e02).toString());
                i11 = str.length() + e02;
                if (z11 && arrayList.size() == i10 - 1) {
                    break;
                }
                e02 = e0(charSequence, str, i11, z10);
            } while (e02 != -1);
            arrayList.add(charSequence.subSequence(i11, charSequence.length()).toString());
            return arrayList;
        }
        return CollectionsKt.e(charSequence.toString());
    }

    public static /* synthetic */ List L0(CharSequence charSequence, char[] cArr, boolean z10, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            z10 = false;
        }
        if ((i11 & 4) != 0) {
            i10 = 0;
        }
        return I0(charSequence, cArr, z10, i10);
    }

    public static final boolean M0(CharSequence charSequence, char c10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        if (charSequence.length() <= 0 || !kotlin.text.a.c(charSequence.charAt(0), c10, z10)) {
            return false;
        }
        return true;
    }

    public static final boolean N0(CharSequence charSequence, CharSequence prefix, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        if (!z10 && (charSequence instanceof String) && (prefix instanceof String)) {
            return w.O((String) charSequence, (String) prefix, i10, false, 4, null);
        }
        return A0(charSequence, i10, prefix, 0, prefix.length(), z10);
    }

    public static final boolean O0(CharSequence charSequence, CharSequence prefix, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        if (!z10 && (charSequence instanceof String) && (prefix instanceof String)) {
            return w.P((String) charSequence, (String) prefix, false, 2, null);
        }
        return A0(charSequence, 0, prefix, 0, prefix.length(), z10);
    }

    public static /* synthetic */ boolean P0(CharSequence charSequence, char c10, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return M0(charSequence, c10, z10);
    }

    public static /* synthetic */ boolean Q0(CharSequence charSequence, CharSequence charSequence2, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        return N0(charSequence, charSequence2, i10, z10);
    }

    public static /* synthetic */ boolean R0(CharSequence charSequence, CharSequence charSequence2, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return O0(charSequence, charSequence2, z10);
    }

    public static final boolean S(CharSequence charSequence, char c10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        if (h0(charSequence, c10, 0, z10, 2, null) >= 0) {
            return true;
        }
        return false;
    }

    public static final String S0(CharSequence charSequence, IntRange range) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(range, "range");
        return charSequence.subSequence(range.b().intValue(), range.c().intValue() + 1).toString();
    }

    public static boolean T(CharSequence charSequence, CharSequence other, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        if (other instanceof String) {
            if (i0(charSequence, (String) other, 0, z10, 2, null) < 0) {
                return false;
            }
            return true;
        } else if (g0(charSequence, other, 0, charSequence.length(), z10, false, 16, null) < 0) {
            return false;
        } else {
            return true;
        }
    }

    public static String T0(String str, char c10, String missingDelimiterValue) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(missingDelimiterValue, "missingDelimiterValue");
        int h02 = h0(str, c10, 0, false, 6, null);
        if (h02 == -1) {
            return missingDelimiterValue;
        }
        String substring = str.substring(h02 + 1, str.length());
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return substring;
    }

    public static /* synthetic */ boolean U(CharSequence charSequence, char c10, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return S(charSequence, c10, z10);
    }

    public static final String U0(String str, String delimiter, String missingDelimiterValue) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(delimiter, "delimiter");
        Intrinsics.checkNotNullParameter(missingDelimiterValue, "missingDelimiterValue");
        int i02 = i0(str, delimiter, 0, false, 6, null);
        if (i02 == -1) {
            return missingDelimiterValue;
        }
        String substring = str.substring(i02 + delimiter.length(), str.length());
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return substring;
    }

    public static /* synthetic */ boolean V(CharSequence charSequence, CharSequence charSequence2, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return T(charSequence, charSequence2, z10);
    }

    public static /* synthetic */ String V0(String str, char c10, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = str;
        }
        return T0(str, c10, str2);
    }

    public static final boolean W(CharSequence charSequence, char c10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        if (charSequence.length() > 0 && kotlin.text.a.c(charSequence.charAt(c0(charSequence)), c10, z10)) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ String W0(String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str3 = str;
        }
        return U0(str, str2, str3);
    }

    public static final boolean X(CharSequence charSequence, CharSequence suffix, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(suffix, "suffix");
        if (!z10 && (charSequence instanceof String) && (suffix instanceof String)) {
            return w.z((String) charSequence, (String) suffix, false, 2, null);
        }
        return A0(charSequence, charSequence.length() - suffix.length(), suffix, 0, suffix.length(), z10);
    }

    public static String X0(String str, char c10, String missingDelimiterValue) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(missingDelimiterValue, "missingDelimiterValue");
        int n02 = n0(str, c10, 0, false, 6, null);
        if (n02 == -1) {
            return missingDelimiterValue;
        }
        String substring = str.substring(n02 + 1, str.length());
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return substring;
    }

    public static /* synthetic */ boolean Y(CharSequence charSequence, char c10, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return W(charSequence, c10, z10);
    }

    public static final String Y0(String str, String delimiter, String missingDelimiterValue) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(delimiter, "delimiter");
        Intrinsics.checkNotNullParameter(missingDelimiterValue, "missingDelimiterValue");
        int o02 = o0(str, delimiter, 0, false, 6, null);
        if (o02 == -1) {
            return missingDelimiterValue;
        }
        String substring = str.substring(o02 + delimiter.length(), str.length());
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return substring;
    }

    public static /* synthetic */ boolean Z(CharSequence charSequence, CharSequence charSequence2, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return X(charSequence, charSequence2, z10);
    }

    public static /* synthetic */ String Z0(String str, char c10, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = str;
        }
        return X0(str, c10, str2);
    }

    private static final Pair a0(CharSequence charSequence, Collection collection, int i10, boolean z10, boolean z11) {
        kotlin.ranges.a p10;
        CharSequence charSequence2;
        Object obj;
        boolean z12;
        Object obj2;
        int o02;
        if (!z10 && collection.size() == 1) {
            String str = (String) CollectionsKt.P0(collection);
            if (!z11) {
                o02 = i0(charSequence, str, i10, false, 4, null);
            } else {
                o02 = o0(charSequence, str, i10, false, 4, null);
            }
            if (o02 < 0) {
                return null;
            }
            return ir.v.a(Integer.valueOf(o02), str);
        }
        CharSequence charSequence3 = charSequence;
        if (!z11) {
            p10 = new IntRange(kotlin.ranges.d.d(i10, 0), charSequence3.length());
        } else {
            p10 = kotlin.ranges.d.p(kotlin.ranges.d.i(i10, c0(charSequence3)), 0);
        }
        if (charSequence3 instanceof String) {
            int d10 = p10.d();
            int e10 = p10.e();
            int f10 = p10.f();
            if ((f10 > 0 && d10 <= e10) || (f10 < 0 && e10 <= d10)) {
                int i11 = d10;
                while (true) {
                    Iterator it = collection.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            obj2 = it.next();
                            String str2 = (String) obj2;
                            z12 = z10;
                            if (w.D(str2, 0, (String) charSequence3, i11, str2.length(), z12)) {
                                break;
                            }
                            z10 = z12;
                        } else {
                            z12 = z10;
                            obj2 = null;
                            break;
                        }
                    }
                    String str3 = (String) obj2;
                    if (str3 != null) {
                        return ir.v.a(Integer.valueOf(i11), str3);
                    }
                    if (i11 == e10) {
                        break;
                    }
                    i11 += f10;
                    z10 = z12;
                }
            }
        } else {
            boolean z13 = z10;
            int d11 = p10.d();
            int e11 = p10.e();
            int f11 = p10.f();
            if ((f11 > 0 && d11 <= e11) || (f11 < 0 && e11 <= d11)) {
                int i12 = d11;
                while (true) {
                    Iterator it2 = collection.iterator();
                    while (true) {
                        if (it2.hasNext()) {
                            obj = it2.next();
                            String str4 = (String) obj;
                            boolean z14 = z13;
                            charSequence2 = charSequence3;
                            z13 = z14;
                            if (A0(str4, 0, charSequence2, i12, str4.length(), z14)) {
                                break;
                            }
                            charSequence3 = charSequence2;
                        } else {
                            charSequence2 = charSequence3;
                            obj = null;
                            break;
                        }
                    }
                    String str5 = (String) obj;
                    if (str5 != null) {
                        return ir.v.a(Integer.valueOf(i12), str5);
                    }
                    if (i12 == e11) {
                        break;
                    }
                    i12 += f11;
                    charSequence3 = charSequence2;
                }
            }
        }
        return null;
    }

    public static /* synthetic */ String a1(String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str3 = str;
        }
        return Y0(str, str2, str3);
    }

    public static IntRange b0(CharSequence charSequence) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        return new IntRange(0, charSequence.length() - 1);
    }

    public static final String b1(String str, char c10, String missingDelimiterValue) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(missingDelimiterValue, "missingDelimiterValue");
        int h02 = h0(str, c10, 0, false, 6, null);
        if (h02 == -1) {
            return missingDelimiterValue;
        }
        String substring = str.substring(0, h02);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return substring;
    }

    public static int c0(CharSequence charSequence) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        return charSequence.length() - 1;
    }

    public static final String c1(String str, String delimiter, String missingDelimiterValue) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(delimiter, "delimiter");
        Intrinsics.checkNotNullParameter(missingDelimiterValue, "missingDelimiterValue");
        int i02 = i0(str, delimiter, 0, false, 6, null);
        if (i02 == -1) {
            return missingDelimiterValue;
        }
        String substring = str.substring(0, i02);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return substring;
    }

    public static final int d0(CharSequence charSequence, char c10, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        if (!z10 && (charSequence instanceof String)) {
            return ((String) charSequence).indexOf(c10, i10);
        }
        return j0(charSequence, new char[]{c10}, i10, z10);
    }

    public static /* synthetic */ String d1(String str, char c10, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = str;
        }
        return b1(str, c10, str2);
    }

    public static final int e0(CharSequence charSequence, String string, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(string, "string");
        if (!z10 && (charSequence instanceof String)) {
            return ((String) charSequence).indexOf(string, i10);
        }
        return g0(charSequence, string, i10, charSequence.length(), z10, false, 16, null);
    }

    public static /* synthetic */ String e1(String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str3 = str;
        }
        return c1(str, str2, str3);
    }

    private static final int f0(CharSequence charSequence, CharSequence charSequence2, int i10, int i11, boolean z10, boolean z11) {
        kotlin.ranges.a p10;
        if (!z11) {
            p10 = new IntRange(kotlin.ranges.d.d(i10, 0), kotlin.ranges.d.i(i11, charSequence.length()));
        } else {
            p10 = kotlin.ranges.d.p(kotlin.ranges.d.i(i10, c0(charSequence)), kotlin.ranges.d.d(i11, 0));
        }
        if ((charSequence instanceof String) && (charSequence2 instanceof String)) {
            int d10 = p10.d();
            int e10 = p10.e();
            int f10 = p10.f();
            if ((f10 > 0 && d10 <= e10) || (f10 < 0 && e10 <= d10)) {
                int i12 = d10;
                while (true) {
                    String str = (String) charSequence2;
                    boolean z12 = z10;
                    if (w.D(str, 0, (String) charSequence, i12, str.length(), z12)) {
                        return i12;
                    }
                    if (i12 != e10) {
                        i12 += f10;
                        z10 = z12;
                    } else {
                        return -1;
                    }
                }
            } else {
                return -1;
            }
        } else {
            boolean z13 = z10;
            int d11 = p10.d();
            int e11 = p10.e();
            int f11 = p10.f();
            if ((f11 > 0 && d11 <= e11) || (f11 < 0 && e11 <= d11)) {
                int i13 = d11;
                while (true) {
                    boolean z14 = z13;
                    CharSequence charSequence3 = charSequence;
                    CharSequence charSequence4 = charSequence2;
                    z13 = z14;
                    if (A0(charSequence4, 0, charSequence3, i13, charSequence2.length(), z14)) {
                        return i13;
                    }
                    if (i13 != e11) {
                        i13 += f11;
                        charSequence2 = charSequence4;
                        charSequence = charSequence3;
                    } else {
                        return -1;
                    }
                }
            } else {
                return -1;
            }
        }
    }

    public static final String f1(String str, char c10, String missingDelimiterValue) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(missingDelimiterValue, "missingDelimiterValue");
        int n02 = n0(str, c10, 0, false, 6, null);
        if (n02 == -1) {
            return missingDelimiterValue;
        }
        String substring = str.substring(0, n02);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return substring;
    }

    static /* synthetic */ int g0(CharSequence charSequence, CharSequence charSequence2, int i10, int i11, boolean z10, boolean z11, int i12, Object obj) {
        if ((i12 & 16) != 0) {
            z11 = false;
        }
        return f0(charSequence, charSequence2, i10, i11, z10, z11);
    }

    public static String g1(String str, String delimiter, String missingDelimiterValue) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(delimiter, "delimiter");
        Intrinsics.checkNotNullParameter(missingDelimiterValue, "missingDelimiterValue");
        int o02 = o0(str, delimiter, 0, false, 6, null);
        if (o02 == -1) {
            return missingDelimiterValue;
        }
        String substring = str.substring(0, o02);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return substring;
    }

    public static /* synthetic */ int h0(CharSequence charSequence, char c10, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            i10 = 0;
        }
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        return d0(charSequence, c10, i10, z10);
    }

    public static /* synthetic */ String h1(String str, char c10, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = str;
        }
        return f1(str, c10, str2);
    }

    public static /* synthetic */ int i0(CharSequence charSequence, String str, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            i10 = 0;
        }
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        return e0(charSequence, str, i10, z10);
    }

    public static /* synthetic */ String i1(String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str3 = str;
        }
        return g1(str, str2, str3);
    }

    public static final int j0(CharSequence charSequence, char[] chars, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(chars, "chars");
        if (!z10 && chars.length == 1 && (charSequence instanceof String)) {
            return ((String) charSequence).indexOf(kotlin.collections.i.B0(chars), i10);
        }
        int d10 = kotlin.ranges.d.d(i10, 0);
        int c02 = c0(charSequence);
        if (d10 > c02) {
            return -1;
        }
        while (true) {
            char charAt = charSequence.charAt(d10);
            for (char c10 : chars) {
                if (kotlin.text.a.c(c10, charAt, z10)) {
                    return d10;
                }
            }
            if (d10 != c02) {
                d10++;
            } else {
                return -1;
            }
        }
    }

    public static Boolean j1(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        if (Intrinsics.areEqual(str, "true")) {
            return Boolean.TRUE;
        }
        if (Intrinsics.areEqual(str, "false")) {
            return Boolean.FALSE;
        }
        return null;
    }

    public static boolean k0(CharSequence charSequence) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        for (int i10 = 0; i10 < charSequence.length(); i10++) {
            if (!CharsKt__CharJVMKt.b(charSequence.charAt(i10))) {
                return false;
            }
        }
        return true;
    }

    public static CharSequence k1(CharSequence charSequence) {
        int i10;
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        int length = charSequence.length() - 1;
        int i11 = 0;
        boolean z10 = false;
        while (i11 <= length) {
            if (!z10) {
                i10 = i11;
            } else {
                i10 = length;
            }
            boolean b10 = CharsKt__CharJVMKt.b(charSequence.charAt(i10));
            if (!z10) {
                if (!b10) {
                    z10 = true;
                } else {
                    i11++;
                }
            } else if (!b10) {
                break;
            } else {
                length--;
            }
        }
        return charSequence.subSequence(i11, length + 1);
    }

    public static final int l0(CharSequence charSequence, char c10, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        if (!z10 && (charSequence instanceof String)) {
            return ((String) charSequence).lastIndexOf(c10, i10);
        }
        return p0(charSequence, new char[]{c10}, i10, z10);
    }

    public static String l1(String str, char... chars) {
        int i10;
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(chars, "chars");
        int length = str.length() - 1;
        int i11 = 0;
        boolean z10 = false;
        while (i11 <= length) {
            if (!z10) {
                i10 = i11;
            } else {
                i10 = length;
            }
            boolean K = kotlin.collections.i.K(chars, str.charAt(i10));
            if (!z10) {
                if (!K) {
                    z10 = true;
                } else {
                    i11++;
                }
            } else if (!K) {
                break;
            } else {
                length--;
            }
        }
        return str.subSequence(i11, length + 1).toString();
    }

    public static final int m0(CharSequence charSequence, String string, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(string, "string");
        if (!z10 && (charSequence instanceof String)) {
            return ((String) charSequence).lastIndexOf(string, i10);
        }
        return f0(charSequence, string, i10, 0, z10, true);
    }

    public static String m1(String str, char... chars) {
        CharSequence charSequence;
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(chars, "chars");
        int length = str.length() - 1;
        if (length >= 0) {
            while (true) {
                int i10 = length - 1;
                if (!kotlin.collections.i.K(chars, str.charAt(length))) {
                    charSequence = str.subSequence(0, length + 1);
                    break;
                } else if (i10 < 0) {
                    break;
                } else {
                    length = i10;
                }
            }
            return charSequence.toString();
        }
        charSequence = "";
        return charSequence.toString();
    }

    public static /* synthetic */ int n0(CharSequence charSequence, char c10, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            i10 = c0(charSequence);
        }
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        return l0(charSequence, c10, i10, z10);
    }

    public static String n1(String str, char... chars) {
        CharSequence charSequence;
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(chars, "chars");
        int length = str.length();
        int i10 = 0;
        while (true) {
            if (i10 < length) {
                if (!kotlin.collections.i.K(chars, str.charAt(i10))) {
                    charSequence = str.subSequence(i10, str.length());
                    break;
                }
                i10++;
            } else {
                charSequence = "";
                break;
            }
        }
        return charSequence.toString();
    }

    public static /* synthetic */ int o0(CharSequence charSequence, String str, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            i10 = c0(charSequence);
        }
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        return m0(charSequence, str, i10, z10);
    }

    public static final int p0(CharSequence charSequence, char[] chars, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        Intrinsics.checkNotNullParameter(chars, "chars");
        if (!z10 && chars.length == 1 && (charSequence instanceof String)) {
            return ((String) charSequence).lastIndexOf(kotlin.collections.i.B0(chars), i10);
        }
        for (int i11 = kotlin.ranges.d.i(i10, c0(charSequence)); -1 < i11; i11--) {
            char charAt = charSequence.charAt(i11);
            for (char c10 : chars) {
                if (kotlin.text.a.c(c10, charAt, z10)) {
                    return i11;
                }
            }
        }
        return -1;
    }

    public static final Sequence q0(CharSequence charSequence) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        return new a(charSequence);
    }

    public static final List r0(CharSequence charSequence) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        return kotlin.sequences.k.Y(q0(charSequence));
    }

    public static final CharSequence s0(CharSequence charSequence, int i10, char c10) {
        Intrinsics.checkNotNullParameter(charSequence, "<this>");
        if (i10 >= 0) {
            if (i10 <= charSequence.length()) {
                return charSequence.subSequence(0, charSequence.length());
            }
            StringBuilder sb2 = new StringBuilder(i10);
            int length = i10 - charSequence.length();
            int i11 = 1;
            if (1 <= length) {
                while (true) {
                    sb2.append(c10);
                    if (i11 == length) {
                        break;
                    }
                    i11++;
                }
            }
            sb2.append(charSequence);
            return sb2;
        }
        throw new IllegalArgumentException("Desired length " + i10 + " is less than zero.");
    }

    public static /* synthetic */ List split$default(CharSequence charSequence, String[] strArr, boolean z10, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            z10 = false;
        }
        if ((i11 & 4) != 0) {
            i10 = 0;
        }
        return J0(charSequence, strArr, z10, i10);
    }

    public static String t0(String str, int i10, char c10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return s0(str, i10, c10).toString();
    }

    private static final Sequence u0(CharSequence charSequence, final char[] cArr, int i10, final boolean z10, int i11) {
        H0(i11);
        return new b(charSequence, i10, i11, new Function2() { // from class: kotlin.text.x
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Pair y02;
                y02 = StringsKt__StringsKt.y0(cArr, z10, (CharSequence) obj, ((Integer) obj2).intValue());
                return y02;
            }
        });
    }

    private static final Sequence v0(CharSequence charSequence, String[] strArr, int i10, final boolean z10, int i11) {
        H0(i11);
        final List e10 = kotlin.collections.i.e(strArr);
        return new b(charSequence, i10, i11, new Function2() { // from class: kotlin.text.y
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Pair z02;
                z02 = StringsKt__StringsKt.z0(e10, z10, (CharSequence) obj, ((Integer) obj2).intValue());
                return z02;
            }
        });
    }

    static /* synthetic */ Sequence w0(CharSequence charSequence, char[] cArr, int i10, boolean z10, int i11, int i12, Object obj) {
        if ((i12 & 2) != 0) {
            i10 = 0;
        }
        if ((i12 & 4) != 0) {
            z10 = false;
        }
        if ((i12 & 8) != 0) {
            i11 = 0;
        }
        return u0(charSequence, cArr, i10, z10, i11);
    }

    static /* synthetic */ Sequence x0(CharSequence charSequence, String[] strArr, int i10, boolean z10, int i11, int i12, Object obj) {
        if ((i12 & 2) != 0) {
            i10 = 0;
        }
        if ((i12 & 4) != 0) {
            z10 = false;
        }
        if ((i12 & 8) != 0) {
            i11 = 0;
        }
        return v0(charSequence, strArr, i10, z10, i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Pair y0(char[] cArr, boolean z10, CharSequence DelimitedRangesSequence, int i10) {
        Intrinsics.checkNotNullParameter(DelimitedRangesSequence, "$this$DelimitedRangesSequence");
        int j02 = j0(DelimitedRangesSequence, cArr, i10, z10);
        if (j02 < 0) {
            return null;
        }
        return ir.v.a(Integer.valueOf(j02), 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Pair z0(List list, boolean z10, CharSequence DelimitedRangesSequence, int i10) {
        Intrinsics.checkNotNullParameter(DelimitedRangesSequence, "$this$DelimitedRangesSequence");
        Pair a02 = a0(DelimitedRangesSequence, list, i10, z10, false);
        if (a02 != null) {
            return ir.v.a(a02.c(), Integer.valueOf(((String) a02.d()).length()));
        }
        return null;
    }
}

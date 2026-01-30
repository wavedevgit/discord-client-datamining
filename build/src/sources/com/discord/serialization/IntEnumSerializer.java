package com.discord.serialization;

import com.discord.serialization.IntEnum;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.ArrayList;
import kotlin.Metadata;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import org.jetbrains.annotations.NotNull;
import vr.a;
import zs.e;
import zs.j;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0011\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0016\u0018\u0000*\b\b\u0000\u0010\u0001*\u00020\u00022\b\u0012\u0004\u0012\u0002H\u00010\u0003B!\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00028\u00000\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00018\u0000¢\u0006\u0004\b\u0007\u0010\bJ\u001b\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00028\u0000¢\u0006\u0002\u0010\u001eJ\u0013\u0010\u001f\u001a\u00028\u00002\u0006\u0010 \u001a\u00020!¢\u0006\u0002\u0010\"R\u0015\u0010\u0006\u001a\u0004\u0018\u00018\u0000¢\u0006\n\n\u0002\u0010\u000b\u001a\u0004\b\t\u0010\nR\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R4\u0010\u000e\u001a&\u0012\f\u0012\n \u0010*\u0004\u0018\u00018\u00008\u0000 \u0010*\u0012\u0012\u000e\b\u0001\u0012\n \u0010*\u0004\u0018\u00018\u00008\u00000\u000f0\u000fX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0011R\u0016\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00130\u000fX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0014R\u0014\u0010\u0015\u001a\u00020\u0016X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018¨\u0006#"}, d2 = {"Lcom/discord/serialization/IntEnumSerializer;", "T", "Lcom/discord/serialization/IntEnum;", "Lkotlinx/serialization/KSerializer;", "type", "Lkotlin/reflect/KClass;", "default", "<init>", "(Lkotlin/reflect/KClass;Lcom/discord/serialization/IntEnum;)V", "getDefault", "()Lcom/discord/serialization/IntEnum;", "Lcom/discord/serialization/IntEnum;", "serialName", "", InquiryField.ChoicesField.TYPE, "", "kotlin.jvm.PlatformType", "[Lcom/discord/serialization/IntEnum;", "choicesNumbers", "", "[Ljava/lang/Integer;", "descriptor", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "getDescriptor", "()Lkotlinx/serialization/descriptors/SerialDescriptor;", "serialize", "", "encoder", "Lkotlinx/serialization/encoding/Encoder;", "value", "(Lkotlinx/serialization/encoding/Encoder;Lcom/discord/serialization/IntEnum;)V", "deserialize", "decoder", "Lkotlinx/serialization/encoding/Decoder;", "(Lkotlinx/serialization/encoding/Decoder;)Lcom/discord/serialization/IntEnum;", "serialization_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nIntEnumSerializer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 IntEnumSerializer.kt\ncom/discord/serialization/IntEnumSerializer\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 3 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,64:1\n11228#2:65\n11563#2,3:66\n37#3:69\n36#3,3:70\n1#4:73\n*S KotlinDebug\n*F\n+ 1 IntEnumSerializer.kt\ncom/discord/serialization/IntEnumSerializer\n*L\n17#1:65\n17#1:66,3\n17#1:69\n17#1:70,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class IntEnumSerializer<T extends IntEnum> implements KSerializer {
    @NotNull
    private final T[] choices;
    @NotNull
    private final Integer[] choicesNumbers;

    /* renamed from: default  reason: not valid java name */
    private final T f1default;
    @NotNull
    private final SerialDescriptor descriptor;
    @NotNull
    private final String serialName;

    public IntEnumSerializer(@NotNull KClass type, T t10) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f1default = t10;
        String simpleName = type.getSimpleName();
        Intrinsics.checkNotNull(simpleName);
        this.serialName = simpleName;
        Object[] enumConstants = a.b(type).getEnumConstants();
        Intrinsics.checkNotNull(enumConstants);
        T[] tArr = (T[]) ((IntEnum[]) enumConstants);
        this.choices = tArr;
        ArrayList arrayList = new ArrayList(tArr.length);
        for (T t11 : tArr) {
            arrayList.add(Integer.valueOf(t11.getSerialNumber()));
        }
        Integer[] numArr = (Integer[]) arrayList.toArray(new Integer[0]);
        this.choicesNumbers = numArr;
        this.descriptor = j.b(this.serialName, e.f.f56104a);
        if (numArr.length == this.choices.length) {
            if (i.P(numArr).size() != numArr.length) {
                throw new IllegalArgumentException("There must be no duplicates of serial numbers.");
            }
            return;
        }
        throw new IllegalArgumentException("There must be exactly one serial number for every enum constant.");
    }

    public final T getDefault() {
        return this.f1default;
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public SerialDescriptor getDescriptor() {
        return this.descriptor;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xs.o
    public /* bridge */ /* synthetic */ void serialize(Encoder encoder, Object obj) {
        serialize(encoder, (Encoder) ((IntEnum) obj));
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final T deserialize(@NotNull Decoder decoder) {
        T t10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        int h10 = decoder.h();
        int h02 = i.h0(this.choicesNumbers, Integer.valueOf(h10));
        if ((h02 == -1 || h02 < 0 || h02 >= this.choices.length) && (t10 = this.f1default) != null) {
            return t10;
        }
        if (h02 != -1) {
            if (h02 >= 0) {
                T[] tArr = this.choices;
                if (h02 < tArr.length) {
                    T t11 = tArr[h02];
                    Intrinsics.checkNotNullExpressionValue(t11, "get(...)");
                    return t11;
                }
            }
            String str = this.serialName;
            int length = this.choices.length;
            throw new IllegalStateException((h02 + " is not among valid " + str + " choices, choices size is " + length).toString());
        }
        String str2 = this.serialName;
        throw new IllegalStateException((h10 + " is not a valid serial value of " + str2).toString());
    }

    public final void serialize(@NotNull Encoder encoder, @NotNull T value) {
        T t10;
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        int h02 = i.h0(this.choices, value);
        if (h02 == -1 && (t10 = this.f1default) != null) {
            encoder.B(t10.getSerialNumber());
        } else if (h02 != -1) {
            encoder.B(this.choicesNumbers[h02].intValue());
        } else {
            String str = this.serialName;
            T[] tArr = this.choices;
            throw new IllegalStateException((value + " is not a valid enum " + str + ", choices are " + tArr).toString());
        }
    }

    public /* synthetic */ IntEnumSerializer(KClass kClass, IntEnum intEnum, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(kClass, (i10 & 2) != 0 ? null : intEnum);
    }
}

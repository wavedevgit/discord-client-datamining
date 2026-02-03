package com.discord.chat.bridge.botuikit;

import com.discord.chat.bridge.media.UnfurledMediaItem;
import com.discord.chat.bridge.spoiler.SpoilerableData;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@at.m
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\u0001\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0018\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 :2\u00020\u00012\u00020\u0002:\u00029:BA\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\u0006\u0012\u0006\u0010\n\u001a\u00020\u0006\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u000e\u0010\u000fBq\b\u0010\u0012\u0006\u0010\u0010\u001a\u00020\u0004\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015¢\u0006\u0004\b\u000e\u0010\u0016J\t\u0010$\u001a\u00020\u0004HÆ\u0003J\t\u0010%\u001a\u00020\u0006HÆ\u0003J\t\u0010&\u001a\u00020\bHÆ\u0003J\t\u0010'\u001a\u00020\u0006HÆ\u0003J\t\u0010(\u001a\u00020\u0006HÆ\u0003J\t\u0010)\u001a\u00020\fHÆ\u0003J\u000b\u0010*\u001a\u0004\u0018\u00010\u0006HÆ\u0003JQ\u0010+\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\u00062\b\b\u0002\u0010\n\u001a\u00020\u00062\b\b\u0002\u0010\u000b\u001a\u00020\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0006HÆ\u0001J\u0013\u0010,\u001a\u00020\f2\b\u0010-\u001a\u0004\u0018\u00010.HÖ\u0003J\t\u0010/\u001a\u00020\u0004HÖ\u0001J\t\u00100\u001a\u00020\u0006HÖ\u0001J%\u00101\u001a\u0002022\u0006\u00103\u001a\u00020\u00002\u0006\u00104\u001a\u0002052\u0006\u00106\u001a\u000207H\u0001¢\u0006\u0002\b8R\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0014\u0010\u0005\u001a\u00020\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\t\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001aR\u0011\u0010\n\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001aR\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\u001fR\u0013\u0010\r\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u001aR\u0016\u0010\u0011\u001a\u0004\u0018\u00010\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u001aR\u0016\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#¨\u0006;"}, d2 = {"Lcom/discord/chat/bridge/botuikit/FileDisplayComponent;", "Lcom/discord/chat/bridge/botuikit/Component;", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", "type", "", StackTraceHelper.ID_KEY, "", "file", "Lcom/discord/chat/bridge/media/UnfurledMediaItem;", StackTraceHelper.NAME_KEY, "size", "isSpoiler", "", "spoilerDescription", "<init>", "(ILjava/lang/String;Lcom/discord/chat/bridge/media/UnfurledMediaItem;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;)V", "seen0", "spoilerOrNull", "obscureOrNull", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Lcom/discord/chat/bridge/media/UnfurledMediaItem;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Void;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()I", "getId", "()Ljava/lang/String;", "getFile", "()Lcom/discord/chat/bridge/media/UnfurledMediaItem;", "getName", "getSize", "()Z", "getSpoilerDescription", "getSpoilerOrNull", "getObscureOrNull", "()Ljava/lang/Void;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFileDisplayComponent.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FileDisplayComponent.kt\ncom/discord/chat/bridge/botuikit/FileDisplayComponent\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,23:1\n1#2:24\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FileDisplayComponent extends Component implements SpoilerableData {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final UnfurledMediaItem file;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8243id;
    private final boolean isSpoiler;
    @NotNull
    private final String name;
    private final Void obscureOrNull;
    @NotNull
    private final String size;
    private final String spoilerDescription;
    private final String spoilerOrNull;
    private final int type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/FileDisplayComponent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/FileDisplayComponent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return FileDisplayComponent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ FileDisplayComponent(int i10, int i11, String str, UnfurledMediaItem unfurledMediaItem, String str2, String str3, boolean z10, String str4, String str5, Void r11, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (127 != (i10 & 127)) {
            v1.b(i10, 127, FileDisplayComponent$$serializer.INSTANCE.getDescriptor());
        }
        this.type = i11;
        this.f8243id = str;
        this.file = unfurledMediaItem;
        this.name = str2;
        this.size = str3;
        this.isSpoiler = z10;
        this.spoilerDescription = str4;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.spoilerOrNull = str4 == null || StringsKt.k0(str4) ? null : str4;
        } else {
            this.spoilerOrNull = str5;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.obscureOrNull = null;
        } else {
            this.obscureOrNull = r11;
        }
    }

    public static /* synthetic */ FileDisplayComponent copy$default(FileDisplayComponent fileDisplayComponent, int i10, String str, UnfurledMediaItem unfurledMediaItem, String str2, String str3, boolean z10, String str4, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = fileDisplayComponent.type;
        }
        if ((i11 & 2) != 0) {
            str = fileDisplayComponent.f8243id;
        }
        if ((i11 & 4) != 0) {
            unfurledMediaItem = fileDisplayComponent.file;
        }
        if ((i11 & 8) != 0) {
            str2 = fileDisplayComponent.name;
        }
        if ((i11 & 16) != 0) {
            str3 = fileDisplayComponent.size;
        }
        if ((i11 & 32) != 0) {
            z10 = fileDisplayComponent.isSpoiler;
        }
        if ((i11 & 64) != 0) {
            str4 = fileDisplayComponent.spoilerDescription;
        }
        boolean z11 = z10;
        String str5 = str4;
        String str6 = str3;
        UnfurledMediaItem unfurledMediaItem2 = unfurledMediaItem;
        return fileDisplayComponent.copy(i10, str, unfurledMediaItem2, str2, str6, z11, str5);
    }

    /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r4, r5) == false) goto L20;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final /* synthetic */ void write$Self$chat_release(com.discord.chat.bridge.botuikit.FileDisplayComponent r7, kotlinx.serialization.encoding.CompositeEncoder r8, kotlinx.serialization.descriptors.SerialDescriptor r9) {
        /*
            int r0 = r7.getType()
            r1 = 0
            r8.w(r9, r1, r0)
            java.lang.String r0 = r7.getId()
            r2 = 1
            r8.y(r9, r2, r0)
            com.discord.chat.bridge.media.UnfurledMediaItem$$serializer r0 = com.discord.chat.bridge.media.UnfurledMediaItem$$serializer.INSTANCE
            com.discord.chat.bridge.media.UnfurledMediaItem r3 = r7.file
            r4 = 2
            r8.D(r9, r4, r0, r3)
            r0 = 3
            java.lang.String r3 = r7.name
            r8.y(r9, r0, r3)
            r0 = 4
            java.lang.String r3 = r7.size
            r8.y(r9, r0, r3)
            r0 = 5
            boolean r3 = r7.isSpoiler
            r8.x(r9, r0, r3)
            dt.n2 r0 = dt.n2.f20978a
            java.lang.String r3 = r7.spoilerDescription
            r4 = 6
            r8.s(r9, r4, r0, r3)
            r3 = 7
            boolean r4 = r8.z(r9, r3)
            if (r4 == 0) goto L3a
            goto L53
        L3a:
            java.lang.String r4 = r7.getSpoilerOrNull()
            java.lang.String r5 = r7.spoilerDescription
            if (r5 == 0) goto L48
            boolean r6 = kotlin.text.StringsKt.k0(r5)
            if (r6 == 0) goto L49
        L48:
            r1 = r2
        L49:
            if (r1 != 0) goto L4c
            goto L4d
        L4c:
            r5 = 0
        L4d:
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r4, r5)
            if (r1 != 0) goto L5a
        L53:
            java.lang.String r1 = r7.getSpoilerOrNull()
            r8.s(r9, r3, r0, r1)
        L5a:
            r0 = 8
            boolean r1 = r8.z(r9, r0)
            if (r1 == 0) goto L63
            goto L69
        L63:
            java.lang.Void r1 = r7.m272getObscureOrNull()
            if (r1 == 0) goto L72
        L69:
            dt.k1 r1 = dt.k1.f20961a
            java.lang.Void r7 = r7.m272getObscureOrNull()
            r8.s(r9, r0, r1, r7)
        L72:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.botuikit.FileDisplayComponent.write$Self$chat_release(com.discord.chat.bridge.botuikit.FileDisplayComponent, kotlinx.serialization.encoding.CompositeEncoder, kotlinx.serialization.descriptors.SerialDescriptor):void");
    }

    public final int component1() {
        return this.type;
    }

    @NotNull
    public final String component2() {
        return this.f8243id;
    }

    @NotNull
    public final UnfurledMediaItem component3() {
        return this.file;
    }

    @NotNull
    public final String component4() {
        return this.name;
    }

    @NotNull
    public final String component5() {
        return this.size;
    }

    public final boolean component6() {
        return this.isSpoiler;
    }

    public final String component7() {
        return this.spoilerDescription;
    }

    @NotNull
    public final FileDisplayComponent copy(int i10, @NotNull String id2, @NotNull UnfurledMediaItem file, @NotNull String name, @NotNull String size, boolean z10, String str) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(size, "size");
        return new FileDisplayComponent(i10, id2, file, name, size, z10, str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof FileDisplayComponent) {
            FileDisplayComponent fileDisplayComponent = (FileDisplayComponent) obj;
            return this.type == fileDisplayComponent.type && Intrinsics.areEqual(this.f8243id, fileDisplayComponent.f8243id) && Intrinsics.areEqual(this.file, fileDisplayComponent.file) && Intrinsics.areEqual(this.name, fileDisplayComponent.name) && Intrinsics.areEqual(this.size, fileDisplayComponent.size) && this.isSpoiler == fileDisplayComponent.isSpoiler && Intrinsics.areEqual(this.spoilerDescription, fileDisplayComponent.spoilerDescription);
        }
        return false;
    }

    @NotNull
    public final UnfurledMediaItem getFile() {
        return this.file;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    @NotNull
    public String getId() {
        return this.f8243id;
    }

    @NotNull
    public final String getName() {
        return this.name;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public /* bridge */ /* synthetic */ String getObscureOrNull() {
        return (String) m272getObscureOrNull();
    }

    @NotNull
    public final String getSize() {
        return this.size;
    }

    public final String getSpoilerDescription() {
        return this.spoilerDescription;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getSpoilerOrNull() {
        return this.spoilerOrNull;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    public int getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((((((((((Integer.hashCode(this.type) * 31) + this.f8243id.hashCode()) * 31) + this.file.hashCode()) * 31) + this.name.hashCode()) * 31) + this.size.hashCode()) * 31) + Boolean.hashCode(this.isSpoiler)) * 31;
        String str = this.spoilerDescription;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    public final boolean isSpoiler() {
        return this.isSpoiler;
    }

    @NotNull
    public String toString() {
        int i10 = this.type;
        String str = this.f8243id;
        UnfurledMediaItem unfurledMediaItem = this.file;
        String str2 = this.name;
        String str3 = this.size;
        boolean z10 = this.isSpoiler;
        String str4 = this.spoilerDescription;
        return "FileDisplayComponent(type=" + i10 + ", id=" + str + ", file=" + unfurledMediaItem + ", name=" + str2 + ", size=" + str3 + ", isSpoiler=" + z10 + ", spoilerDescription=" + str4 + ")";
    }

    /* renamed from: getObscureOrNull  reason: collision with other method in class */
    public Void m272getObscureOrNull() {
        return this.obscureOrNull;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileDisplayComponent(int i10, @NotNull String id2, @NotNull UnfurledMediaItem file, @NotNull String name, @NotNull String size, boolean z10, String str) {
        super(null);
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(size, "size");
        this.type = i10;
        this.f8243id = id2;
        this.file = file;
        this.name = name;
        this.size = size;
        this.isSpoiler = z10;
        this.spoilerDescription = str;
        this.spoilerOrNull = str == null || StringsKt.k0(str) ? null : str;
    }
}

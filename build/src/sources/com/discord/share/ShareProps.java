package com.discord.share;

import android.content.ContentResolver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import androidx.core.content.b;
import androidx.core.content.pm.ShortcutInfoCompat;
import com.discord.share.intent.GetFileNameKt;
import com.discord.shortcuts.ShortcutData;
import com.facebook.react.devsupport.StackTraceHelper;
import ir.v;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import w1.c;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\b\u0080\b\u0018\u0000 \u001f2\u00020\u0001:\u0002\u001e\u001fB1\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\t\u0010\nJ\u0006\u0010\u0011\u001a\u00020\u0012J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\u000f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0003J\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0003HÆ\u0003J;\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001b\u001a\u00020\u001cHÖ\u0001J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\fR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\f¨\u0006 "}, d2 = {"Lcom/discord/share/ShareProps;", "", "text", "", "attachments", "", "Lcom/discord/share/ShareProps$Attachment;", "targetChannelId", "targetUserId", "<init>", "(Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;)V", "getText", "()Ljava/lang/String;", "getAttachments", "()Ljava/util/List;", "getTargetChannelId", "getTargetUserId", "toBundle", "Landroid/os/Bundle;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "", "toString", "Attachment", "Companion", "share_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nShareProps.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ShareProps.kt\ncom/discord/share/ShareProps\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,84:1\n1563#2:85\n1634#2,3:86\n37#3:89\n36#3,3:90\n*S KotlinDebug\n*F\n+ 1 ShareProps.kt\ncom/discord/share/ShareProps\n*L\n37#1:85\n37#1:86,3\n37#1:89\n37#1:90,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ShareProps {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final List<Attachment> attachments;
    private final String targetChannelId;
    private final String targetUserId;
    @NotNull
    private final String text;

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\u0006\u0010\f\u001a\u00020\rJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0003HÆ\u0003J)\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0016HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\tR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\t¨\u0006\u0018"}, d2 = {"Lcom/discord/share/ShareProps$Attachment;", "", StackTraceHelper.NAME_KEY, "", "uri", "mimeType", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getName", "()Ljava/lang/String;", "getUri", "getMimeType", "toBundle", "Landroid/os/Bundle;", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "", "toString", "share_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Attachment {
        private final String mimeType;
        @NotNull
        private final String name;
        @NotNull
        private final String uri;

        public Attachment(@NotNull String name, @NotNull String uri, String str) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.name = name;
            this.uri = uri;
            this.mimeType = str;
        }

        public static /* synthetic */ Attachment copy$default(Attachment attachment, String str, String str2, String str3, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = attachment.name;
            }
            if ((i10 & 2) != 0) {
                str2 = attachment.uri;
            }
            if ((i10 & 4) != 0) {
                str3 = attachment.mimeType;
            }
            return attachment.copy(str, str2, str3);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        @NotNull
        public final String component2() {
            return this.uri;
        }

        public final String component3() {
            return this.mimeType;
        }

        @NotNull
        public final Attachment copy(@NotNull String name, @NotNull String uri, String str) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(uri, "uri");
            return new Attachment(name, uri, str);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Attachment) {
                Attachment attachment = (Attachment) obj;
                return Intrinsics.areEqual(this.name, attachment.name) && Intrinsics.areEqual(this.uri, attachment.uri) && Intrinsics.areEqual(this.mimeType, attachment.mimeType);
            }
            return false;
        }

        public final String getMimeType() {
            return this.mimeType;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        @NotNull
        public final String getUri() {
            return this.uri;
        }

        public int hashCode() {
            int hashCode = ((this.name.hashCode() * 31) + this.uri.hashCode()) * 31;
            String str = this.mimeType;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        @NotNull
        public final Bundle toBundle() {
            return c.a(v.a(StackTraceHelper.NAME_KEY, this.name), v.a("uri", this.uri), v.a("mimeType", this.mimeType));
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.uri;
            String str3 = this.mimeType;
            return "Attachment(name=" + str + ", uri=" + str2 + ", mimeType=" + str3 + ")";
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0004\u001a\u00020\u0005*\u00020\u00062\u0006\u0010\u0007\u001a\u00020\bJ\u0012\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n*\u00020\u0006H\u0002¨\u0006\f"}, d2 = {"Lcom/discord/share/ShareProps$Companion;", "", "<init>", "()V", "createShareProps", "Lcom/discord/share/ShareProps;", "Landroid/content/Intent;", "context", "Landroid/content/Context;", "getUriExtras", "", "Landroid/net/Uri;", "share_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nShareProps.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ShareProps.kt\ncom/discord/share/ShareProps$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 IntentUtils.kt\ncom/discord/misc/utilities/intent/IntentUtilsKt\n*L\n1#1,84:1\n1#2:85\n1563#3:86\n1634#3,3:87\n17#4:90\n14#4:91\n*S KotlinDebug\n*F\n+ 1 ShareProps.kt\ncom/discord/share/ShareProps$Companion\n*L\n67#1:86\n67#1:87,3\n80#1:90\n81#1:91\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final List<Uri> getUriExtras(Intent intent) {
            ArrayList a10 = b.a(intent, "android.intent.extra.STREAM", Uri.class);
            if (a10 != null) {
                return a10;
            }
            return CollectionsKt.p((Parcelable) b.b(intent, "android.intent.extra.STREAM", Uri.class));
        }

        @NotNull
        public final ShareProps createShareProps(@NotNull Intent intent, @NotNull Context context) {
            String str;
            Object obj;
            Intent h10;
            ShortcutData shortcutIntentData;
            Map<String, String> data;
            Intrinsics.checkNotNullParameter(intent, "<this>");
            Intrinsics.checkNotNullParameter(context, "context");
            String str2 = null;
            if (Build.VERSION.SDK_INT >= 29) {
                str = intent.getStringExtra("android.intent.extra.shortcut.ID");
            } else {
                str = null;
            }
            if (str != null) {
                List f10 = androidx.core.content.pm.b.f(context, 10);
                Intrinsics.checkNotNullExpressionValue(f10, "getShortcuts(...)");
                Iterator it = f10.iterator();
                while (true) {
                    if (it.hasNext()) {
                        obj = it.next();
                        if (Intrinsics.areEqual(((ShortcutInfoCompat) obj).g(), str)) {
                            break;
                        }
                    } else {
                        obj = null;
                        break;
                    }
                }
                ShortcutInfoCompat shortcutInfoCompat = (ShortcutInfoCompat) obj;
                if (shortcutInfoCompat != null && (h10 = shortcutInfoCompat.h()) != null && (shortcutIntentData = ShortcutData.Companion.getShortcutIntentData(h10)) != null && (data = shortcutIntentData.getData()) != null) {
                    str2 = data.get("receiving_user_id");
                }
            }
            String stringExtra = intent.getStringExtra("android.intent.extra.TEXT");
            if (stringExtra == null) {
                stringExtra = "";
            }
            List<Uri> uriExtras = getUriExtras(intent);
            ArrayList arrayList = new ArrayList(CollectionsKt.w(uriExtras, 10));
            for (Uri uri : uriExtras) {
                ContentResolver contentResolver = context.getContentResolver();
                Intrinsics.checkNotNullExpressionValue(contentResolver, "getContentResolver(...)");
                String fileName = GetFileNameKt.getFileName(contentResolver, uri);
                String uri2 = uri.toString();
                Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
                arrayList.add(new Attachment(fileName, uri2, context.getContentResolver().getType(uri)));
            }
            return new ShareProps(stringExtra, arrayList, str, str2);
        }

        private Companion() {
        }
    }

    public ShareProps(@NotNull String text, @NotNull List<Attachment> attachments, String str, String str2) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(attachments, "attachments");
        this.text = text;
        this.attachments = attachments;
        this.targetChannelId = str;
        this.targetUserId = str2;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ ShareProps copy$default(ShareProps shareProps, String str, List list, String str2, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = shareProps.text;
        }
        if ((i10 & 2) != 0) {
            list = shareProps.attachments;
        }
        if ((i10 & 4) != 0) {
            str2 = shareProps.targetChannelId;
        }
        if ((i10 & 8) != 0) {
            str3 = shareProps.targetUserId;
        }
        return shareProps.copy(str, list, str2, str3);
    }

    @NotNull
    public final String component1() {
        return this.text;
    }

    @NotNull
    public final List<Attachment> component2() {
        return this.attachments;
    }

    public final String component3() {
        return this.targetChannelId;
    }

    public final String component4() {
        return this.targetUserId;
    }

    @NotNull
    public final ShareProps copy(@NotNull String text, @NotNull List<Attachment> attachments, String str, String str2) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(attachments, "attachments");
        return new ShareProps(text, attachments, str, str2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ShareProps) {
            ShareProps shareProps = (ShareProps) obj;
            return Intrinsics.areEqual(this.text, shareProps.text) && Intrinsics.areEqual(this.attachments, shareProps.attachments) && Intrinsics.areEqual(this.targetChannelId, shareProps.targetChannelId) && Intrinsics.areEqual(this.targetUserId, shareProps.targetUserId);
        }
        return false;
    }

    @NotNull
    public final List<Attachment> getAttachments() {
        return this.attachments;
    }

    public final String getTargetChannelId() {
        return this.targetChannelId;
    }

    public final String getTargetUserId() {
        return this.targetUserId;
    }

    @NotNull
    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        int hashCode = ((this.text.hashCode() * 31) + this.attachments.hashCode()) * 31;
        String str = this.targetChannelId;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.targetUserId;
        return hashCode2 + (str2 != null ? str2.hashCode() : 0);
    }

    @NotNull
    public final Bundle toBundle() {
        Pair a10 = v.a("text", this.text);
        List<Attachment> list = this.attachments;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (Attachment attachment : list) {
            arrayList.add(attachment.toBundle());
        }
        return c.a(a10, v.a("attachments", arrayList.toArray(new Bundle[0])), v.a("targetChannelId", this.targetChannelId), v.a("targetUserId", this.targetUserId));
    }

    @NotNull
    public String toString() {
        String str = this.text;
        List<Attachment> list = this.attachments;
        String str2 = this.targetChannelId;
        String str3 = this.targetUserId;
        return "ShareProps(text=" + str + ", attachments=" + list + ", targetChannelId=" + str2 + ", targetUserId=" + str3 + ")";
    }
}

package com.discord.media.utils;

import android.content.ContentResolver;
import android.content.ContentUris;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.provider.MediaStore;
import com.discord.media.utils.ContentResolverMedia;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import lr.p;
import org.jetbrains.annotations.NotNull;
import org.webrtc.MediaStreamTrack;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u001e\n\u0002\u0010\u000b\n\u0002\b\t\b\u0080\b\u0018\u0000 32\u00020\u0001:\u0005/0123BS\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\u0006\u0010\r\u001a\u00020\f\u0012\u0006\u0010\u000e\u001a\u00020\f\u0012\u0006\u0010\u000f\u001a\u00020\f¢\u0006\u0004\b\u0010\u0010\u0011J\t\u0010 \u001a\u00020\u0003HÆ\u0003J\t\u0010!\u001a\u00020\u0005HÆ\u0003J\t\u0010\"\u001a\u00020\u0007HÆ\u0003J\u000b\u0010#\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000b\u0010$\u001a\u0004\u0018\u00010\tHÆ\u0003J\t\u0010%\u001a\u00020\fHÆ\u0003J\t\u0010&\u001a\u00020\fHÆ\u0003J\t\u0010'\u001a\u00020\fHÆ\u0003J\t\u0010(\u001a\u00020\fHÆ\u0003Jg\u0010)\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\u000b\u001a\u00020\f2\b\b\u0002\u0010\r\u001a\u00020\f2\b\b\u0002\u0010\u000e\u001a\u00020\f2\b\b\u0002\u0010\u000f\u001a\u00020\fHÆ\u0001J\u0013\u0010*\u001a\u00020+2\b\u0010,\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010-\u001a\u00020\fHÖ\u0001J\t\u0010.\u001a\u00020\tHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0013\u0010\n\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0019R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\r\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001cR\u0011\u0010\u000e\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001cR\u0011\u0010\u000f\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u001c¨\u00064"}, d2 = {"Lcom/discord/media/utils/ContentResolverMedia;", "", StackTraceHelper.ID_KEY, "", "uri", "Landroid/net/Uri;", "mediaType", "Lcom/discord/media/utils/ContentResolverMedia$MediaType;", "mimeType", "", StackTraceHelper.NAME_KEY, "duration", "", "dateAdded", "width", "height", "<init>", "(JLandroid/net/Uri;Lcom/discord/media/utils/ContentResolverMedia$MediaType;Ljava/lang/String;Ljava/lang/String;IIII)V", "getId", "()J", "getUri", "()Landroid/net/Uri;", "getMediaType", "()Lcom/discord/media/utils/ContentResolverMedia$MediaType;", "getMimeType", "()Ljava/lang/String;", "getName", "getDuration", "()I", "getDateAdded", "getWidth", "getHeight", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "copy", "equals", "", "other", "hashCode", "toString", "MediaType", "QueryType", "Column", "QueryColumns", "Companion", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ContentResolverMedia {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int dateAdded;
    private final int duration;
    private final int height;

    /* renamed from: id  reason: collision with root package name */
    private final long f9159id;
    @NotNull
    private final MediaType mediaType;
    private final String mimeType;
    private final String name;
    @NotNull
    private final Uri uri;
    private final int width;

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u0004\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rJ\u000e\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\rJ\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u00032\u0006\u0010\f\u001a\u00020\rJ\u0010\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0002R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u000e\u0010\b\u001a\u00020\tX\u0082.¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/discord/media/utils/ContentResolverMedia$Column;", "", "field", "", "<init>", "(Ljava/lang/String;)V", "getField", "()Ljava/lang/String;", "columnIndex", "", "getInt", "", "cursor", "Landroid/database/Cursor;", "getLong", "", "getString", "getColumnIndex", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Column {
        private Number columnIndex;
        @NotNull
        private final String field;

        public Column(@NotNull String field) {
            Intrinsics.checkNotNullParameter(field, "field");
            this.field = field;
        }

        private final int getColumnIndex(Cursor cursor) {
            if (this.columnIndex == null) {
                this.columnIndex = Integer.valueOf(cursor.getColumnIndexOrThrow(this.field));
            }
            Number number = this.columnIndex;
            if (number == null) {
                Intrinsics.throwUninitializedPropertyAccessException("columnIndex");
                number = null;
            }
            return number.intValue();
        }

        @NotNull
        public final String getField() {
            return this.field;
        }

        public final int getInt(@NotNull Cursor cursor) {
            Intrinsics.checkNotNullParameter(cursor, "cursor");
            return cursor.getInt(getColumnIndex(cursor));
        }

        public final long getLong(@NotNull Cursor cursor) {
            Intrinsics.checkNotNullParameter(cursor, "cursor");
            return cursor.getLong(getColumnIndex(cursor));
        }

        public final String getString(@NotNull Cursor cursor) {
            Intrinsics.checkNotNullParameter(cursor, "cursor");
            return cursor.getString(getColumnIndex(cursor));
        }
    }

    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0003J=\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u00072\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u000eH\u0002¢\u0006\u0002\u0010\u0012J3\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\b0\u00072\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\b\u0010\u0011\u001a\u0004\u0018\u00010\u000e¢\u0006\u0002\u0010\u0014¨\u0006\u0015"}, d2 = {"Lcom/discord/media/utils/ContentResolverMedia$Companion;", "", "<init>", "()V", "isAtLeastQ", "", "queryMedia", "", "Lcom/discord/media/utils/ContentResolverMedia;", "context", "Landroid/content/Context;", "queryType", "Lcom/discord/media/utils/ContentResolverMedia$QueryType;", "queryLimit", "", "queryUri", "Landroid/net/Uri;", "queryOffset", "(Landroid/content/Context;Lcom/discord/media/utils/ContentResolverMedia$QueryType;ILandroid/net/Uri;Ljava/lang/Integer;)Ljava/util/List;", "getMedia", "(Landroid/content/Context;Lcom/discord/media/utils/ContentResolverMedia$QueryType;ILjava/lang/Integer;)Ljava/util/List;", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nContentResolverMedia.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ContentResolverMedia.kt\ncom/discord/media/utils/ContentResolverMedia$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,217:1\n1563#2:218\n1634#2,3:219\n*S KotlinDebug\n*F\n+ 1 ContentResolverMedia.kt\ncom/discord/media/utils/ContentResolverMedia$Companion\n*L\n175#1:218\n175#1:219,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List getMedia$lambda$2(Context context, QueryType queryType, int i10, Integer num, Uri contentUri) {
            Intrinsics.checkNotNullParameter(contentUri, "contentUri");
            return ContentResolverMedia.Companion.queryMedia(context, queryType, i10, contentUri, num);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean isAtLeastQ() {
            if (Build.VERSION.SDK_INT >= 29) {
                return true;
            }
            return false;
        }

        private final List<ContentResolverMedia> queryMedia(Context context, QueryType queryType, int i10, Uri uri, Integer num) {
            QueryColumns queryColumns;
            QueryColumns queryColumns2;
            String str;
            if (isAtLeastQ() && !queryType.shouldIncludeVideo()) {
                queryColumns2 = new QueryColumns(null, null, null, null, null, null, null, null, null, 383, null);
            } else {
                if (!isAtLeastQ() && !uri.getPathSegments().contains(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                    queryColumns = new QueryColumns(null, null, null, null, null, null, null, null, null, 319, null);
                } else if (!isAtLeastQ() && uri.getPathSegments().contains(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                    queryColumns2 = new QueryColumns(null, null, null, null, null, null, null, null, null, 447, null);
                } else {
                    queryColumns = new QueryColumns(null, null, null, null, null, null, null, null, null, 511, null);
                }
                queryColumns2 = queryColumns;
            }
            ContentResolverUtils contentResolverUtils = ContentResolverUtils.INSTANCE;
            ContentResolver contentResolver = context.getContentResolver();
            Intrinsics.checkNotNullExpressionValue(contentResolver, "getContentResolver(...)");
            String[] projection = queryColumns2.getProjection();
            if (isAtLeastQ()) {
                str = queryType.getSelection();
            } else {
                str = null;
            }
            Cursor queryCompat = contentResolverUtils.queryCompat(contentResolver, uri, projection, i10, "date_added DESC", str, num);
            if (queryCompat != null) {
                try {
                    IntRange u10 = kotlin.ranges.d.u(0, queryCompat.getCount());
                    ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
                    Iterator it = u10.iterator();
                    while (it.hasNext()) {
                        queryCompat.moveToPosition(((m0) it).nextInt());
                        arrayList.add(queryColumns2.getContentResolverMedia(uri, queryCompat));
                    }
                    wr.c.a(queryCompat, null);
                    return arrayList;
                } finally {
                }
            } else {
                return CollectionsKt.l();
            }
        }

        @NotNull
        public final List<ContentResolverMedia> getMedia(@NotNull final Context context, @NotNull final QueryType queryType, final int i10, final Integer num) {
            List l10;
            List l11;
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(queryType, "queryType");
            Function1 function1 = new Function1() { // from class: com.discord.media.utils.a
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    List media$lambda$2;
                    media$lambda$2 = ContentResolverMedia.Companion.getMedia$lambda$2(context, queryType, i10, num, (Uri) obj);
                    return media$lambda$2;
                }
            };
            if (isAtLeastQ()) {
                Uri contentUri = MediaStore.Files.getContentUri("external");
                Intrinsics.checkNotNullExpressionValue(contentUri, "getContentUri(...)");
                return (List) function1.invoke(contentUri);
            }
            if (queryType.shouldIncludeImages()) {
                Uri EXTERNAL_CONTENT_URI = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
                Intrinsics.checkNotNullExpressionValue(EXTERNAL_CONTENT_URI, "EXTERNAL_CONTENT_URI");
                l10 = (List) function1.invoke(EXTERNAL_CONTENT_URI);
            } else {
                l10 = CollectionsKt.l();
            }
            if (queryType.shouldIncludeVideo()) {
                Uri EXTERNAL_CONTENT_URI2 = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
                Intrinsics.checkNotNullExpressionValue(EXTERNAL_CONTENT_URI2, "EXTERNAL_CONTENT_URI");
                l11 = (List) function1.invoke(EXTERNAL_CONTENT_URI2);
            } else {
                l11 = CollectionsKt.l();
            }
            List c10 = CollectionsKt.c();
            c10.addAll(l10);
            c10.addAll(l11);
            return CollectionsKt.a(c10);
        }

        private Companion() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0000\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0006\u001a\u00020\u0007H\u0016j\u0002\b\u0004j\u0002\b\u0005¨\u0006\b"}, d2 = {"Lcom/discord/media/utils/ContentResolverMedia$MediaType;", "", "<init>", "(Ljava/lang/String;I)V", "IMAGE", "VIDEO", "toString", "", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class MediaType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ MediaType[] $VALUES;
        public static final MediaType IMAGE = new MediaType("IMAGE", 0);
        public static final MediaType VIDEO = new MediaType("VIDEO", 1);

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[MediaType.values().length];
                try {
                    iArr[MediaType.IMAGE.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[MediaType.VIDEO.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        private static final /* synthetic */ MediaType[] $values() {
            return new MediaType[]{IMAGE, VIDEO};
        }

        static {
            MediaType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = sr.a.a($values);
        }

        private MediaType(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static MediaType valueOf(String str) {
            return (MediaType) Enum.valueOf(MediaType.class, str);
        }

        public static MediaType[] values() {
            return (MediaType[]) $VALUES.clone();
        }

        @Override // java.lang.Enum
        @NotNull
        public String toString() {
            int i10 = WhenMappings.$EnumSwitchMapping$0[ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "ALAssetTypeVideo";
                }
                throw new p();
            }
            return "ALAssetTypePhoto";
        }
    }

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001Bg\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0003\u0012\b\b\u0002\u0010\b\u001a\u00020\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\f\u0010\rJ\u0011\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00100\u000f¢\u0006\u0002\u0010\u0011J\u0016\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0017R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u000b\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lcom/discord/media/utils/ContentResolverMedia$QueryColumns;", "", "queryColumnId", "Lcom/discord/media/utils/ContentResolverMedia$Column;", "queryColumnDisplayName", "queryColumnMimeType", "queryColumnWidth", "queryColumnHeight", "queryColumnDateAdded", "queryMediaType", "queryColumnDuration", "queryColumnOrientation", "<init>", "(Lcom/discord/media/utils/ContentResolverMedia$Column;Lcom/discord/media/utils/ContentResolverMedia$Column;Lcom/discord/media/utils/ContentResolverMedia$Column;Lcom/discord/media/utils/ContentResolverMedia$Column;Lcom/discord/media/utils/ContentResolverMedia$Column;Lcom/discord/media/utils/ContentResolverMedia$Column;Lcom/discord/media/utils/ContentResolverMedia$Column;Lcom/discord/media/utils/ContentResolverMedia$Column;Lcom/discord/media/utils/ContentResolverMedia$Column;)V", "getProjection", "", "", "()[Ljava/lang/String;", "getContentResolverMedia", "Lcom/discord/media/utils/ContentResolverMedia;", "queryUri", "Landroid/net/Uri;", "cursor", "Landroid/database/Cursor;", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nContentResolverMedia.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ContentResolverMedia.kt\ncom/discord/media/utils/ContentResolverMedia$QueryColumns\n+ 2 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,217:1\n37#2:218\n36#2,3:219\n*S KotlinDebug\n*F\n+ 1 ContentResolverMedia.kt\ncom/discord/media/utils/ContentResolverMedia$QueryColumns\n*L\n118#1:218\n118#1:219,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class QueryColumns {
        @NotNull
        private final Column queryColumnDateAdded;
        @NotNull
        private final Column queryColumnDisplayName;
        private final Column queryColumnDuration;
        @NotNull
        private final Column queryColumnHeight;
        @NotNull
        private final Column queryColumnId;
        @NotNull
        private final Column queryColumnMimeType;
        private final Column queryColumnOrientation;
        @NotNull
        private final Column queryColumnWidth;
        private final Column queryMediaType;

        public QueryColumns() {
            this(null, null, null, null, null, null, null, null, null, 511, null);
        }

        @NotNull
        public final ContentResolverMedia getContentResolverMedia(@NotNull Uri queryUri, @NotNull Cursor cursor) {
            List<String> pathSegments;
            boolean z10;
            int i10;
            MediaType mediaType;
            Column column;
            Column column2;
            Intrinsics.checkNotNullParameter(queryUri, "queryUri");
            Intrinsics.checkNotNullParameter(cursor, "cursor");
            Column column3 = this.queryMediaType;
            boolean z11 = true;
            int i11 = 0;
            if ((column3 != null && column3.getInt(cursor) == 3) || ((pathSegments = queryUri.getPathSegments()) != null && pathSegments.contains(MediaStreamTrack.VIDEO_TRACK_KIND))) {
                z10 = true;
            } else {
                z10 = false;
            }
            Column column4 = this.queryColumnOrientation;
            if (column4 != null) {
                i10 = column4.getInt(cursor);
            } else {
                i10 = 0;
            }
            if (i10 != 90 && i10 != 270) {
                z11 = false;
            }
            long j10 = this.queryColumnId.getLong(cursor);
            Uri withAppendedId = ContentUris.withAppendedId(queryUri, this.queryColumnId.getLong(cursor));
            Intrinsics.checkNotNullExpressionValue(withAppendedId, "withAppendedId(...)");
            if (z10) {
                mediaType = MediaType.VIDEO;
            } else {
                mediaType = MediaType.IMAGE;
            }
            MediaType mediaType2 = mediaType;
            String string = this.queryColumnMimeType.getString(cursor);
            String string2 = this.queryColumnDisplayName.getString(cursor);
            Column column5 = this.queryColumnDuration;
            if (column5 != null) {
                i11 = column5.getInt(cursor);
            }
            int i12 = i11 / 1000;
            int i13 = this.queryColumnDateAdded.getInt(cursor);
            if (z11) {
                column = this.queryColumnHeight;
            } else {
                column = this.queryColumnWidth;
            }
            int i14 = column.getInt(cursor);
            if (z11) {
                column2 = this.queryColumnWidth;
            } else {
                column2 = this.queryColumnHeight;
            }
            return new ContentResolverMedia(j10, withAppendedId, mediaType2, string, string2, i12, i13, i14, column2.getInt(cursor));
        }

        @NotNull
        public final String[] getProjection() {
            String str;
            String str2;
            String field = this.queryColumnId.getField();
            String field2 = this.queryColumnDisplayName.getField();
            String field3 = this.queryColumnMimeType.getField();
            String field4 = this.queryColumnWidth.getField();
            String field5 = this.queryColumnHeight.getField();
            String field6 = this.queryColumnDateAdded.getField();
            Column column = this.queryMediaType;
            String str3 = null;
            if (column != null) {
                str = column.getField();
            } else {
                str = null;
            }
            Column column2 = this.queryColumnDuration;
            if (column2 != null) {
                str2 = column2.getField();
            } else {
                str2 = null;
            }
            Column column3 = this.queryColumnOrientation;
            if (column3 != null) {
                str3 = column3.getField();
            }
            return (String[]) CollectionsKt.q(field, field2, field3, field4, field5, field6, str, str2, str3).toArray(new String[0]);
        }

        public QueryColumns(@NotNull Column queryColumnId, @NotNull Column queryColumnDisplayName, @NotNull Column queryColumnMimeType, @NotNull Column queryColumnWidth, @NotNull Column queryColumnHeight, @NotNull Column queryColumnDateAdded, Column column, Column column2, Column column3) {
            Intrinsics.checkNotNullParameter(queryColumnId, "queryColumnId");
            Intrinsics.checkNotNullParameter(queryColumnDisplayName, "queryColumnDisplayName");
            Intrinsics.checkNotNullParameter(queryColumnMimeType, "queryColumnMimeType");
            Intrinsics.checkNotNullParameter(queryColumnWidth, "queryColumnWidth");
            Intrinsics.checkNotNullParameter(queryColumnHeight, "queryColumnHeight");
            Intrinsics.checkNotNullParameter(queryColumnDateAdded, "queryColumnDateAdded");
            this.queryColumnId = queryColumnId;
            this.queryColumnDisplayName = queryColumnDisplayName;
            this.queryColumnMimeType = queryColumnMimeType;
            this.queryColumnWidth = queryColumnWidth;
            this.queryColumnHeight = queryColumnHeight;
            this.queryColumnDateAdded = queryColumnDateAdded;
            this.queryMediaType = column;
            this.queryColumnDuration = column2;
            this.queryColumnOrientation = column3;
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public /* synthetic */ QueryColumns(com.discord.media.utils.ContentResolverMedia.Column r6, com.discord.media.utils.ContentResolverMedia.Column r7, com.discord.media.utils.ContentResolverMedia.Column r8, com.discord.media.utils.ContentResolverMedia.Column r9, com.discord.media.utils.ContentResolverMedia.Column r10, com.discord.media.utils.ContentResolverMedia.Column r11, com.discord.media.utils.ContentResolverMedia.Column r12, com.discord.media.utils.ContentResolverMedia.Column r13, com.discord.media.utils.ContentResolverMedia.Column r14, int r15, kotlin.jvm.internal.DefaultConstructorMarker r16) {
            /*
                r5 = this;
                r1 = r15 & 1
                if (r1 == 0) goto Lb
                com.discord.media.utils.ContentResolverMedia$Column r6 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r1 = "_id"
                r6.<init>(r1)
            Lb:
                r1 = r15 & 2
                if (r1 == 0) goto L16
                com.discord.media.utils.ContentResolverMedia$Column r7 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r1 = "_display_name"
                r7.<init>(r1)
            L16:
                r1 = r15 & 4
                if (r1 == 0) goto L21
                com.discord.media.utils.ContentResolverMedia$Column r8 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r1 = "mime_type"
                r8.<init>(r1)
            L21:
                r1 = r15 & 8
                if (r1 == 0) goto L2c
                com.discord.media.utils.ContentResolverMedia$Column r9 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r1 = "width"
                r9.<init>(r1)
            L2c:
                r1 = r15 & 16
                if (r1 == 0) goto L37
                com.discord.media.utils.ContentResolverMedia$Column r10 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r1 = "height"
                r10.<init>(r1)
            L37:
                r1 = r15 & 32
                if (r1 == 0) goto L43
                com.discord.media.utils.ContentResolverMedia$Column r1 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r2 = "date_added"
                r1.<init>(r2)
                goto L44
            L43:
                r1 = r11
            L44:
                r2 = r15 & 64
                if (r2 == 0) goto L50
                com.discord.media.utils.ContentResolverMedia$Column r2 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r3 = "media_type"
                r2.<init>(r3)
                goto L51
            L50:
                r2 = r12
            L51:
                r3 = r15 & 128(0x80, float:1.794E-43)
                if (r3 == 0) goto L5d
                com.discord.media.utils.ContentResolverMedia$Column r3 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r4 = "duration"
                r3.<init>(r4)
                goto L5e
            L5d:
                r3 = r13
            L5e:
                r0 = r15 & 256(0x100, float:3.59E-43)
                if (r0 == 0) goto L7f
                com.discord.media.utils.ContentResolverMedia$Companion r0 = com.discord.media.utils.ContentResolverMedia.Companion
                boolean r0 = com.discord.media.utils.ContentResolverMedia.Companion.access$isAtLeastQ(r0)
                if (r0 == 0) goto L72
                com.discord.media.utils.ContentResolverMedia$Column r0 = new com.discord.media.utils.ContentResolverMedia$Column
                java.lang.String r4 = "orientation"
                r0.<init>(r4)
                goto L73
            L72:
                r0 = 0
            L73:
                r16 = r0
            L75:
                r11 = r9
                r12 = r10
                r13 = r1
                r14 = r2
                r15 = r3
                r9 = r7
                r10 = r8
                r7 = r5
                r8 = r6
                goto L82
            L7f:
                r16 = r14
                goto L75
            L82:
                r7.<init>(r8, r9, r10, r11, r12, r13, r14, r15, r16)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.media.utils.ContentResolverMedia.QueryColumns.<init>(com.discord.media.utils.ContentResolverMedia$Column, com.discord.media.utils.ContentResolverMedia$Column, com.discord.media.utils.ContentResolverMedia$Column, com.discord.media.utils.ContentResolverMedia$Column, com.discord.media.utils.ContentResolverMedia$Column, com.discord.media.utils.ContentResolverMedia$Column, com.discord.media.utils.ContentResolverMedia$Column, com.discord.media.utils.ContentResolverMedia$Column, com.discord.media.utils.ContentResolverMedia$Column, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0081\u0002\u0018\u0000 \f2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\fB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0007\u001a\u00020\bJ\u0006\u0010\t\u001a\u00020\bJ\u0006\u0010\n\u001a\u00020\u000bj\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\r"}, d2 = {"Lcom/discord/media/utils/ContentResolverMedia$QueryType;", "", "<init>", "(Ljava/lang/String;I)V", "ALL", "IMAGE", "VIDEO", "shouldIncludeImages", "", "shouldIncludeVideo", "getSelection", "", "Companion", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class QueryType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ QueryType[] $VALUES;
        @NotNull
        public static final Companion Companion;
        @NotNull
        private static final List<String> UNSUPPORTED_IMAGE_MIME_TYPES;
        public static final QueryType ALL = new QueryType("ALL", 0);
        public static final QueryType IMAGE = new QueryType("IMAGE", 1);
        public static final QueryType VIDEO = new QueryType("VIDEO", 2);

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0007\u001a\u00020\u0006H\u0002R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/discord/media/utils/ContentResolverMedia$QueryType$Companion;", "", "<init>", "()V", "UNSUPPORTED_IMAGE_MIME_TYPES", "", "", "getUnsupportedImageMimeTypes", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            /* JADX INFO: Access modifiers changed from: private */
            public final String getUnsupportedImageMimeTypes() {
                return CollectionsKt.x0(QueryType.UNSUPPORTED_IMAGE_MIME_TYPES, ",", null, null, 0, null, new Function1() { // from class: com.discord.media.utils.b
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        CharSequence unsupportedImageMimeTypes$lambda$0;
                        unsupportedImageMimeTypes$lambda$0 = ContentResolverMedia.QueryType.Companion.getUnsupportedImageMimeTypes$lambda$0((String) obj);
                        return unsupportedImageMimeTypes$lambda$0;
                    }
                }, 30, null);
            }

            /* JADX INFO: Access modifiers changed from: private */
            public static final CharSequence getUnsupportedImageMimeTypes$lambda$0(String mimeType) {
                Intrinsics.checkNotNullParameter(mimeType, "mimeType");
                return "'" + mimeType + "'";
            }

            private Companion() {
            }
        }

        private static final /* synthetic */ QueryType[] $values() {
            return new QueryType[]{ALL, IMAGE, VIDEO};
        }

        static {
            QueryType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = sr.a.a($values);
            Companion = new Companion(null);
            UNSUPPORTED_IMAGE_MIME_TYPES = CollectionsKt.e("image/x-adobe-dng");
        }

        private QueryType(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static QueryType valueOf(String str) {
            return (QueryType) Enum.valueOf(QueryType.class, str);
        }

        public static QueryType[] values() {
            return (QueryType[]) $VALUES.clone();
        }

        @NotNull
        public final String getSelection() {
            String str;
            String str2 = null;
            if (shouldIncludeImages()) {
                str = "media_type=1 AND mime_type NOT IN (" + Companion.getUnsupportedImageMimeTypes() + ")";
            } else {
                str = null;
            }
            if (shouldIncludeVideo()) {
                str2 = "media_type = 3";
            }
            return CollectionsKt.x0(CollectionsKt.q(str, str2), " OR ", null, null, 0, null, null, 62, null);
        }

        public final boolean shouldIncludeImages() {
            if (this != ALL && this != IMAGE) {
                return false;
            }
            return true;
        }

        public final boolean shouldIncludeVideo() {
            if (this != ALL && this != VIDEO) {
                return false;
            }
            return true;
        }
    }

    public ContentResolverMedia(long j10, @NotNull Uri uri, @NotNull MediaType mediaType, String str, String str2, int i10, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(mediaType, "mediaType");
        this.f9159id = j10;
        this.uri = uri;
        this.mediaType = mediaType;
        this.mimeType = str;
        this.name = str2;
        this.duration = i10;
        this.dateAdded = i11;
        this.width = i12;
        this.height = i13;
    }

    public static /* synthetic */ ContentResolverMedia copy$default(ContentResolverMedia contentResolverMedia, long j10, Uri uri, MediaType mediaType, String str, String str2, int i10, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            j10 = contentResolverMedia.f9159id;
        }
        long j11 = j10;
        if ((i14 & 2) != 0) {
            uri = contentResolverMedia.uri;
        }
        Uri uri2 = uri;
        if ((i14 & 4) != 0) {
            mediaType = contentResolverMedia.mediaType;
        }
        return contentResolverMedia.copy(j11, uri2, mediaType, (i14 & 8) != 0 ? contentResolverMedia.mimeType : str, (i14 & 16) != 0 ? contentResolverMedia.name : str2, (i14 & 32) != 0 ? contentResolverMedia.duration : i10, (i14 & 64) != 0 ? contentResolverMedia.dateAdded : i11, (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? contentResolverMedia.width : i12, (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? contentResolverMedia.height : i13);
    }

    public final long component1() {
        return this.f9159id;
    }

    @NotNull
    public final Uri component2() {
        return this.uri;
    }

    @NotNull
    public final MediaType component3() {
        return this.mediaType;
    }

    public final String component4() {
        return this.mimeType;
    }

    public final String component5() {
        return this.name;
    }

    public final int component6() {
        return this.duration;
    }

    public final int component7() {
        return this.dateAdded;
    }

    public final int component8() {
        return this.width;
    }

    public final int component9() {
        return this.height;
    }

    @NotNull
    public final ContentResolverMedia copy(long j10, @NotNull Uri uri, @NotNull MediaType mediaType, String str, String str2, int i10, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(mediaType, "mediaType");
        return new ContentResolverMedia(j10, uri, mediaType, str, str2, i10, i11, i12, i13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ContentResolverMedia) {
            ContentResolverMedia contentResolverMedia = (ContentResolverMedia) obj;
            return this.f9159id == contentResolverMedia.f9159id && Intrinsics.areEqual(this.uri, contentResolverMedia.uri) && this.mediaType == contentResolverMedia.mediaType && Intrinsics.areEqual(this.mimeType, contentResolverMedia.mimeType) && Intrinsics.areEqual(this.name, contentResolverMedia.name) && this.duration == contentResolverMedia.duration && this.dateAdded == contentResolverMedia.dateAdded && this.width == contentResolverMedia.width && this.height == contentResolverMedia.height;
        }
        return false;
    }

    public final int getDateAdded() {
        return this.dateAdded;
    }

    public final int getDuration() {
        return this.duration;
    }

    public final int getHeight() {
        return this.height;
    }

    public final long getId() {
        return this.f9159id;
    }

    @NotNull
    public final MediaType getMediaType() {
        return this.mediaType;
    }

    public final String getMimeType() {
        return this.mimeType;
    }

    public final String getName() {
        return this.name;
    }

    @NotNull
    public final Uri getUri() {
        return this.uri;
    }

    public final int getWidth() {
        return this.width;
    }

    public int hashCode() {
        int hashCode = ((((Long.hashCode(this.f9159id) * 31) + this.uri.hashCode()) * 31) + this.mediaType.hashCode()) * 31;
        String str = this.mimeType;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.name;
        return ((((((((hashCode2 + (str2 != null ? str2.hashCode() : 0)) * 31) + Integer.hashCode(this.duration)) * 31) + Integer.hashCode(this.dateAdded)) * 31) + Integer.hashCode(this.width)) * 31) + Integer.hashCode(this.height);
    }

    @NotNull
    public String toString() {
        long j10 = this.f9159id;
        Uri uri = this.uri;
        MediaType mediaType = this.mediaType;
        String str = this.mimeType;
        String str2 = this.name;
        int i10 = this.duration;
        int i11 = this.dateAdded;
        int i12 = this.width;
        int i13 = this.height;
        return "ContentResolverMedia(id=" + j10 + ", uri=" + uri + ", mediaType=" + mediaType + ", mimeType=" + str + ", name=" + str2 + ", duration=" + i10 + ", dateAdded=" + i11 + ", width=" + i12 + ", height=" + i13 + ")";
    }
}

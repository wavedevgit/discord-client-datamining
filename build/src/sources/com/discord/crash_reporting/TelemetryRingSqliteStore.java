package com.discord.crash_reporting;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.database.sqlite.SQLiteStatement;
import com.discord.crash_reporting.TelemetryRingTypes;
import com.discord.logging.Log;
import com.facebook.react.devsupport.StackTraceHelper;
import ir.p;
import ir.v;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Charsets;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000\u0096\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0016\n\u0000\n\u0002\u0010\u0015\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\"\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u0011\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\t\b\u0000\u0018\u0000 L2\u00020\u0001:\u0004IJKLB\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0014\u0010\u0018\u001a\u00020\u00192\f\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u001c0\u001bJ \u0010\u001d\u001a\u00020\u00192\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u001f2\u0006\u0010!\u001a\u00020\u001cH\u0002J\u0018\u0010\"\u001a\u00020\u00192\u0006\u0010 \u001a\u00020\u001f2\u0006\u0010#\u001a\u00020\u000bH\u0002J5\u0010$\u001a\u00020%2\f\u0010&\u001a\b\u0012\u0004\u0012\u00020(0'2\u0006\u0010)\u001a\u00020\u000b2\b\u0010*\u001a\u0004\u0018\u00010\u00052\b\u0010+\u001a\u0004\u0018\u00010\u000b¢\u0006\u0002\u0010,J\u0006\u0010-\u001a\u00020\u0019J\u0019\u0010.\u001a\u0004\u0018\u00010\u000b2\b\u0010+\u001a\u0004\u0018\u00010\u000bH\u0002¢\u0006\u0002\u0010/J9\u00100\u001a\u0014\u0012\u0004\u0012\u000202\u0012\n\u0012\b\u0012\u0004\u0012\u00020203012\u0006\u00104\u001a\u00020\t2\u0006\u0010)\u001a\u00020\u000b2\b\u0010+\u001a\u0004\u0018\u00010\u000bH\u0002¢\u0006\u0002\u00105J'\u00106\u001a\u0002072\u0006\u00104\u001a\u00020\t2\u0006\u0010)\u001a\u00020\u000b2\b\u0010+\u001a\u0004\u0018\u00010\u000bH\u0002¢\u0006\u0002\u00108J\b\u00109\u001a\u00020\u0019H\u0002J\u0010\u0010:\u001a\u00020\u00192\u0006\u0010;\u001a\u00020<H\u0002J\u0010\u0010=\u001a\u00020\u00192\u0006\u0010;\u001a\u00020<H\u0002J\u0010\u0010>\u001a\u00020\u00192\u0006\u0010;\u001a\u00020<H\u0002J\u0010\u0010?\u001a\u00020@2\u0006\u0010;\u001a\u00020<H\u0002J\u0010\u0010A\u001a\u00020\u00192\u0006\u0010;\u001a\u00020<H\u0002J\u0010\u0010B\u001a\u0002022\u0006\u0010!\u001a\u00020\u001cH\u0002J\u001a\u0010C\u001a\u0004\u0018\u00010D2\u0006\u0010E\u001a\u0002022\u0006\u0010F\u001a\u00020\u000bH\u0002J\u0018\u0010G\u001a\u0002072\u0006\u0010;\u001a\u00020<2\u0006\u0010H\u001a\u000202H\u0002R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\fR\u000e\u0010\r\u001a\u00020\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0012X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006M"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingSqliteStore;", "", "context", "Landroid/content/Context;", "evictionBudget", "Lcom/discord/crash_reporting/TelemetryRingTypes$Budget;", "<init>", "(Landroid/content/Context;Lcom/discord/crash_reporting/TelemetryRingTypes$Budget;)V", "capacity", "", "byteLimit", "", "Ljava/lang/Long;", "dbHelper", "Lcom/discord/crash_reporting/TelemetryRingSqliteStore$DbHelper;", "slotSeq", "", "slotSize", "", "head", "tail", "count", "totalBytes", "nextSeq", "append", "", "entries", "", "Lcom/discord/crash_reporting/TelemetryRingSqliteStore$EntryPayload;", "appendEntry", "updateSlot", "Landroid/database/sqlite/SQLiteStatement;", "clearSlot", "entry", "evictIfNeeded", "limit", "snapshot", "Lcom/discord/crash_reporting/TelemetryRingTypes$Snapshot;", TelemetryRingSqliteStore.KEY_CHANNEL_MASK, "", "Lcom/discord/crash_reporting/TelemetryRingTypes$Channel;", "beforeOffset", "snapshotBudget", "ackedEndOffset", "(Ljava/util/Set;JLcom/discord/crash_reporting/TelemetryRingTypes$Budget;Ljava/lang/Long;)Lcom/discord/crash_reporting/TelemetryRingTypes$Snapshot;", "clear", "effectiveAckedEndOffset", "(Ljava/lang/Long;)Ljava/lang/Long;", "buildSelection", "Lkotlin/Pair;", "", "", "requestedMask", "(IJLjava/lang/Long;)Lkotlin/Pair;", "hasMore", "", "(IJLjava/lang/Long;)Z", "loadState", "ensureSchema", "db", "Landroid/database/sqlite/SQLiteDatabase;", "resetSchema", "loadSlots", "readMeta", "Lcom/discord/crash_reporting/TelemetryRingSqliteStore$MetaState;", "updateMeta", "buildPayloadJson", "decodePayload", "Lcom/discord/crash_reporting/TelemetryRingTypes$LogEntry;", "payload", "seq", "tableExists", "table", "EntryPayload", "MetaState", "DbHelper", "Companion", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTelemetryRingSqliteStore.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TelemetryRingSqliteStore.kt\ncom/discord/crash_reporting/TelemetryRingSqliteStore\n+ 2 SQLiteDatabase.kt\nandroidx/core/database/sqlite/SQLiteDatabaseKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 5 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,628:1\n27#2,11:629\n38#2,4:642\n27#2,15:650\n27#2,15:669\n1869#3,2:640\n1803#3,3:647\n1#4:646\n37#5:665\n36#5,3:666\n*S KotlinDebug\n*F\n+ 1 TelemetryRingSqliteStore.kt\ncom/discord/crash_reporting/TelemetryRingSqliteStore\n*L\n49#1:629,11\n49#1:642,4\n241#1:650,15\n322#1:669,15\n56#1:640,2\n152#1:647,3\n287#1:665\n287#1:666,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TelemetryRingSqliteStore {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String DATABASE_NAME = "telemetry_ring.db";
    private static final int DATABASE_VERSION = 1;
    private static final int DEFAULT_SLOT_CAPACITY = 10000;
    @NotNull
    private static final String KEY_CHANNEL_MASK = "channels";
    @NotNull
    private static final String KEY_DATA = "data";
    @NotNull
    private static final String KEY_KEY = "key";
    @NotNull
    private static final String KEY_MESSAGE = "message";
    @NotNull
    private static final String KEY_TIMESTAMP = "timestamp";
    private static final int META_ROW_ID = 1;
    @NotNull
    private static final String PRAGMA_SYNC_NORMAL = "PRAGMA synchronous=NORMAL";
    @NotNull
    private static final String PRAGMA_WAL = "PRAGMA journal_mode=WAL";
    @NotNull
    private static final String TABLE_META = "telemetry_ring_meta";
    @NotNull
    private static final String TABLE_SLOTS = "telemetry_ring_slots";
    @NotNull
    private static final String TAG = "TelemetryRingSqlite";
    private final Long byteLimit;
    private final int capacity;
    private int count;
    @NotNull
    private final DbHelper dbHelper;
    private int head;
    private long nextSeq;
    @NotNull
    private final long[] slotSeq;
    @NotNull
    private final int[] slotSize;
    private int tail;
    private long totalBytes;

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\f\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\bH\u0002J\u0018\u0010\u0019\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\bH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingSqliteStore$Companion;", "", "<init>", "()V", "TAG", "", "DATABASE_NAME", "DATABASE_VERSION", "", "DEFAULT_SLOT_CAPACITY", "TABLE_SLOTS", "TABLE_META", "META_ROW_ID", "KEY_KEY", "KEY_TIMESTAMP", "KEY_MESSAGE", "KEY_DATA", "KEY_CHANNEL_MASK", "PRAGMA_WAL", "PRAGMA_SYNC_NORMAL", "createSchema", "", "db", "Landroid/database/sqlite/SQLiteDatabase;", "capacity", "prepopulateSlots", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void createSchema(SQLiteDatabase sQLiteDatabase, int i10) {
            sQLiteDatabase.execSQL("CREATE TABLE telemetry_ring_slots (slot_id INTEGER PRIMARY KEY, seq INTEGER NOT NULL, channel_mask INTEGER NOT NULL, payload_json TEXT, payload_size INTEGER NOT NULL)");
            sQLiteDatabase.execSQL("CREATE TABLE telemetry_ring_meta (id INTEGER PRIMARY KEY CHECK (id=1), head INTEGER NOT NULL, tail INTEGER NOT NULL, count INTEGER NOT NULL, total_bytes INTEGER NOT NULL, next_seq INTEGER NOT NULL, capacity INTEGER NOT NULL)");
            sQLiteDatabase.execSQL("CREATE INDEX idx_ring_seq ON telemetry_ring_slots(seq)");
            ContentValues contentValues = new ContentValues();
            contentValues.put(StackTraceHelper.ID_KEY, (Integer) 1);
            contentValues.put("head", (Integer) (-1));
            contentValues.put("tail", (Integer) 0);
            contentValues.put("count", (Integer) 0);
            contentValues.put("total_bytes", (Integer) 0);
            contentValues.put("next_seq", (Integer) 1);
            contentValues.put("capacity", Integer.valueOf(i10));
            sQLiteDatabase.insert(TelemetryRingSqliteStore.TABLE_META, null, contentValues);
            prepopulateSlots(sQLiteDatabase, i10);
        }

        private final void prepopulateSlots(SQLiteDatabase sQLiteDatabase, int i10) {
            ContentValues contentValues = new ContentValues();
            for (int i11 = 0; i11 < i10; i11++) {
                contentValues.clear();
                contentValues.put("slot_id", Integer.valueOf(i11));
                contentValues.put("seq", (Integer) 0);
                contentValues.put("channel_mask", (Integer) 0);
                contentValues.putNull("payload_json");
                contentValues.put("payload_size", (Integer) 0);
                sQLiteDatabase.insert(TelemetryRingSqliteStore.TABLE_SLOTS, null, contentValues);
            }
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0000\b\u0002\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\r\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016J \u0010\u000e\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u00052\u0006\u0010\u0010\u001a\u00020\u0005H\u0016J\u0018\u0010\u0011\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\u0012\u001a\u00020\u0013H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingSqliteStore$DbHelper;", "Landroid/database/sqlite/SQLiteOpenHelper;", "context", "Landroid/content/Context;", "capacity", "", "<init>", "(Landroid/content/Context;I)V", "onConfigure", "", "db", "Landroid/database/sqlite/SQLiteDatabase;", "onOpen", "onCreate", "onUpgrade", "oldVersion", "newVersion", "applyPragma", "pragma", "", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nTelemetryRingSqliteStore.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TelemetryRingSqliteStore.kt\ncom/discord/crash_reporting/TelemetryRingSqliteStore$DbHelper\n+ 2 SQLiteDatabase.kt\nandroidx/core/database/sqlite/SQLiteDatabaseKt\n*L\n1#1,628:1\n27#2,15:629\n*S KotlinDebug\n*F\n+ 1 TelemetryRingSqliteStore.kt\ncom/discord/crash_reporting/TelemetryRingSqliteStore$DbHelper\n*L\n508#1:629,15\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class DbHelper extends SQLiteOpenHelper {
        private final int capacity;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public DbHelper(@NotNull Context context, int i10) {
            super(context, TelemetryRingSqliteStore.DATABASE_NAME, (SQLiteDatabase.CursorFactory) null, 1);
            Intrinsics.checkNotNullParameter(context, "context");
            this.capacity = i10;
        }

        private final void applyPragma(SQLiteDatabase sQLiteDatabase, String str) {
            Cursor rawQuery = sQLiteDatabase.rawQuery(str, null);
            try {
                rawQuery.moveToFirst();
                tr.c.a(rawQuery, null);
            } finally {
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onConfigure(@NotNull SQLiteDatabase db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            db2.enableWriteAheadLogging();
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onCreate(@NotNull SQLiteDatabase db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            db2.beginTransaction();
            try {
                TelemetryRingSqliteStore.Companion.createSchema(db2, this.capacity);
                Unit unit = Unit.f33282a;
                db2.setTransactionSuccessful();
            } finally {
                db2.endTransaction();
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onOpen(@NotNull SQLiteDatabase db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            super.onOpen(db2);
            applyPragma(db2, TelemetryRingSqliteStore.PRAGMA_WAL);
            applyPragma(db2, TelemetryRingSqliteStore.PRAGMA_SYNC_NORMAL);
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onUpgrade(@NotNull SQLiteDatabase db2, int i10, int i11) {
            Intrinsics.checkNotNullParameter(db2, "db");
            db2.execSQL("DROP TABLE IF EXISTS telemetry_ring_slots");
            db2.execSQL("DROP TABLE IF EXISTS telemetry_ring_meta");
            onCreate(db2);
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010$\n\u0000\n\u0002\u0010\b\n\u0002\b\u0012\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u00020\u0001BA\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\u0016\u0010\u0007\u001a\u0012\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\n¢\u0006\u0004\b\u000b\u0010\fJ\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0019\u0010\u0019\u001a\u0012\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010\bHÆ\u0003J\t\u0010\u001a\u001a\u00020\nHÆ\u0003JM\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\u0018\b\u0002\u0010\u0007\u001a\u0012\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010\b2\b\b\u0002\u0010\t\u001a\u00020\nHÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001f\u001a\u00020\nHÖ\u0001J\t\u0010 \u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000eR!\u0010\u0007\u001a\u0012\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015¨\u0006!"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingSqliteStore$EntryPayload;", "", TelemetryRingSqliteStore.KEY_KEY, "", "timestampMs", "", "message", TelemetryRingSqliteStore.KEY_DATA, "", "channelMask", "", "<init>", "(Ljava/lang/String;JLjava/lang/String;Ljava/util/Map;I)V", "getKey", "()Ljava/lang/String;", "getTimestampMs", "()J", "getMessage", "getData", "()Ljava/util/Map;", "getChannelMask", "()I", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "", "other", "hashCode", "toString", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class EntryPayload {
        private final int channelMask;
        private final Map<String, Object> data;
        @NotNull
        private final String key;
        private final String message;
        private final long timestampMs;

        public EntryPayload(@NotNull String key, long j10, String str, Map<String, ? extends Object> map, int i10) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.key = key;
            this.timestampMs = j10;
            this.message = str;
            this.data = map;
            this.channelMask = i10;
        }

        public static /* synthetic */ EntryPayload copy$default(EntryPayload entryPayload, String str, long j10, String str2, Map map, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = entryPayload.key;
            }
            if ((i11 & 2) != 0) {
                j10 = entryPayload.timestampMs;
            }
            if ((i11 & 4) != 0) {
                str2 = entryPayload.message;
            }
            Map<String, Object> map2 = map;
            if ((i11 & 8) != 0) {
                map2 = entryPayload.data;
            }
            if ((i11 & 16) != 0) {
                i10 = entryPayload.channelMask;
            }
            int i12 = i10;
            String str3 = str2;
            return entryPayload.copy(str, j10, str3, map2, i12);
        }

        @NotNull
        public final String component1() {
            return this.key;
        }

        public final long component2() {
            return this.timestampMs;
        }

        public final String component3() {
            return this.message;
        }

        public final Map<String, Object> component4() {
            return this.data;
        }

        public final int component5() {
            return this.channelMask;
        }

        @NotNull
        public final EntryPayload copy(@NotNull String key, long j10, String str, Map<String, ? extends Object> map, int i10) {
            Intrinsics.checkNotNullParameter(key, "key");
            return new EntryPayload(key, j10, str, map, i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof EntryPayload) {
                EntryPayload entryPayload = (EntryPayload) obj;
                return Intrinsics.areEqual(this.key, entryPayload.key) && this.timestampMs == entryPayload.timestampMs && Intrinsics.areEqual(this.message, entryPayload.message) && Intrinsics.areEqual(this.data, entryPayload.data) && this.channelMask == entryPayload.channelMask;
            }
            return false;
        }

        public final int getChannelMask() {
            return this.channelMask;
        }

        public final Map<String, Object> getData() {
            return this.data;
        }

        @NotNull
        public final String getKey() {
            return this.key;
        }

        public final String getMessage() {
            return this.message;
        }

        public final long getTimestampMs() {
            return this.timestampMs;
        }

        public int hashCode() {
            int hashCode = ((this.key.hashCode() * 31) + Long.hashCode(this.timestampMs)) * 31;
            String str = this.message;
            int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
            Map<String, Object> map = this.data;
            return ((hashCode2 + (map != null ? map.hashCode() : 0)) * 31) + Integer.hashCode(this.channelMask);
        }

        @NotNull
        public String toString() {
            String str = this.key;
            long j10 = this.timestampMs;
            String str2 = this.message;
            Map<String, Object> map = this.data;
            int i10 = this.channelMask;
            return "EntryPayload(key=" + str + ", timestampMs=" + j10 + ", message=" + str2 + ", data=" + map + ", channelMask=" + i10 + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\nJ\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0007HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0007HÆ\u0003J;\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001b\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001c\u001a\u00020\u001dHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\fR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010¨\u0006\u001e"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingSqliteStore$MetaState;", "", "head", "", "tail", "count", "totalBytes", "", "nextSeq", "<init>", "(IIIJJ)V", "getHead", "()I", "getTail", "getCount", "getTotalBytes", "()J", "getNextSeq", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "", "other", "hashCode", "toString", "", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class MetaState {
        private final int count;
        private final int head;
        private final long nextSeq;
        private final int tail;
        private final long totalBytes;

        public MetaState(int i10, int i11, int i12, long j10, long j11) {
            this.head = i10;
            this.tail = i11;
            this.count = i12;
            this.totalBytes = j10;
            this.nextSeq = j11;
        }

        public static /* synthetic */ MetaState copy$default(MetaState metaState, int i10, int i11, int i12, long j10, long j11, int i13, Object obj) {
            if ((i13 & 1) != 0) {
                i10 = metaState.head;
            }
            if ((i13 & 2) != 0) {
                i11 = metaState.tail;
            }
            if ((i13 & 4) != 0) {
                i12 = metaState.count;
            }
            if ((i13 & 8) != 0) {
                j10 = metaState.totalBytes;
            }
            if ((i13 & 16) != 0) {
                j11 = metaState.nextSeq;
            }
            long j12 = j11;
            int i14 = i12;
            return metaState.copy(i10, i11, i14, j10, j12);
        }

        public final int component1() {
            return this.head;
        }

        public final int component2() {
            return this.tail;
        }

        public final int component3() {
            return this.count;
        }

        public final long component4() {
            return this.totalBytes;
        }

        public final long component5() {
            return this.nextSeq;
        }

        @NotNull
        public final MetaState copy(int i10, int i11, int i12, long j10, long j11) {
            return new MetaState(i10, i11, i12, j10, j11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof MetaState) {
                MetaState metaState = (MetaState) obj;
                return this.head == metaState.head && this.tail == metaState.tail && this.count == metaState.count && this.totalBytes == metaState.totalBytes && this.nextSeq == metaState.nextSeq;
            }
            return false;
        }

        public final int getCount() {
            return this.count;
        }

        public final int getHead() {
            return this.head;
        }

        public final long getNextSeq() {
            return this.nextSeq;
        }

        public final int getTail() {
            return this.tail;
        }

        public final long getTotalBytes() {
            return this.totalBytes;
        }

        public int hashCode() {
            return (((((((Integer.hashCode(this.head) * 31) + Integer.hashCode(this.tail)) * 31) + Integer.hashCode(this.count)) * 31) + Long.hashCode(this.totalBytes)) * 31) + Long.hashCode(this.nextSeq);
        }

        @NotNull
        public String toString() {
            int i10 = this.head;
            int i11 = this.tail;
            int i12 = this.count;
            long j10 = this.totalBytes;
            long j11 = this.nextSeq;
            return "MetaState(head=" + i10 + ", tail=" + i11 + ", count=" + i12 + ", totalBytes=" + j10 + ", nextSeq=" + j11 + ")";
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[TelemetryRingTypes.BudgetType.values().length];
            try {
                iArr[TelemetryRingTypes.BudgetType.ROWS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[TelemetryRingTypes.BudgetType.BYTES.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public TelemetryRingSqliteStore(@NotNull Context context, @NotNull TelemetryRingTypes.Budget evictionBudget) {
        int d10;
        Long l10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(evictionBudget, "evictionBudget");
        int i10 = WhenMappings.$EnumSwitchMapping$0[evictionBudget.getType().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                d10 = DEFAULT_SLOT_CAPACITY;
            } else {
                throw new p();
            }
        } else {
            d10 = kotlin.ranges.d.d((int) evictionBudget.getLimit(), 1);
        }
        this.capacity = d10;
        if (evictionBudget.getType() == TelemetryRingTypes.BudgetType.BYTES) {
            l10 = Long.valueOf(evictionBudget.getLimit());
        } else {
            l10 = null;
        }
        this.byteLimit = l10;
        this.dbHelper = new DbHelper(context, d10);
        this.slotSeq = new long[d10];
        this.slotSize = new int[d10];
        this.head = -1;
        this.nextSeq = 1L;
        loadState();
    }

    private final void appendEntry(SQLiteStatement sQLiteStatement, SQLiteStatement sQLiteStatement2, EntryPayload entryPayload) {
        int i10;
        String buildPayloadJson = buildPayloadJson(entryPayload);
        byte[] bytes = buildPayloadJson.getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
        int length = bytes.length;
        int i11 = this.head;
        if (i11 < 0) {
            i10 = 0;
        } else {
            i10 = (i11 + 1) % this.capacity;
        }
        long j10 = this.slotSeq[i10];
        int i12 = this.slotSize[i10];
        sQLiteStatement.clearBindings();
        sQLiteStatement.bindLong(1, this.nextSeq);
        sQLiteStatement.bindLong(2, entryPayload.getChannelMask());
        sQLiteStatement.bindString(3, buildPayloadJson);
        long j11 = length;
        sQLiteStatement.bindLong(4, j11);
        sQLiteStatement.bindLong(5, i10);
        sQLiteStatement.executeUpdateDelete();
        long[] jArr = this.slotSeq;
        long j12 = this.nextSeq;
        jArr[i10] = j12;
        this.slotSize[i10] = length;
        this.head = i10;
        this.nextSeq = j12 + 1;
        if (j10 == 0) {
            this.count++;
            this.totalBytes += j11;
        } else {
            this.totalBytes = (this.totalBytes - i12) + j11;
            int i13 = this.count;
            int i14 = this.capacity;
            if (i13 == i14) {
                this.tail = (this.tail + 1) % i14;
            }
        }
        Long l10 = this.byteLimit;
        if (l10 != null) {
            evictIfNeeded(sQLiteStatement2, l10.longValue());
        }
    }

    private final String buildPayloadJson(EntryPayload entryPayload) {
        JSONObject jSONObject = new JSONObject();
        jSONObject.put(KEY_KEY, entryPayload.getKey());
        jSONObject.put(KEY_TIMESTAMP, entryPayload.getTimestampMs());
        jSONObject.put(KEY_CHANNEL_MASK, entryPayload.getChannelMask());
        String message = entryPayload.getMessage();
        if (message != null) {
            jSONObject.put("message", message);
        }
        Map<String, Object> data = entryPayload.getData();
        if (data != null) {
            jSONObject.put(KEY_DATA, JSONObject.wrap(data));
        }
        String jSONObject2 = jSONObject.toString();
        Intrinsics.checkNotNullExpressionValue(jSONObject2, "toString(...)");
        return jSONObject2;
    }

    private final Pair<String, String[]> buildSelection(int i10, long j10, Long l10) {
        List r10 = CollectionsKt.r("seq > 0", "(channel_mask & ?) != 0");
        List r11 = CollectionsKt.r(String.valueOf(i10));
        if (j10 >= 0) {
            r10.add("seq < ?");
            r11.add(String.valueOf(j10));
        }
        if (l10 != null) {
            r10.add("seq > ?");
            r11.add(l10.toString());
        }
        return v.a(CollectionsKt.x0(r10, " AND ", null, null, 0, null, null, 62, null), r11.toArray(new String[0]));
    }

    private final TelemetryRingTypes.LogEntry decodePayload(String str, long j10) {
        String str2;
        Map map;
        Map map2;
        try {
            JSONObject jSONObject = new JSONObject(str);
            String optString = jSONObject.optString(KEY_KEY, "");
            Intrinsics.checkNotNull(optString);
            if (optString.length() == 0) {
                return null;
            }
            long optLong = jSONObject.optLong(KEY_TIMESTAMP, System.currentTimeMillis());
            Object opt = jSONObject.opt("message");
            if (opt instanceof String) {
                str2 = (String) opt;
            } else {
                str2 = null;
            }
            Object opt2 = jSONObject.opt(KEY_DATA);
            if (opt2 instanceof JSONObject) {
                map2 = TelemetryRingSqliteStoreKt.toMap((JSONObject) opt2);
                map = map2;
            } else {
                map = null;
            }
            return new TelemetryRingTypes.LogEntry(optString, optLong, str2, map, 0);
        } catch (Throwable th2) {
            Log.INSTANCE.w(TAG, "Failed to decode payload seq=" + j10, th2);
            return null;
        }
    }

    private final Long effectiveAckedEndOffset(Long l10) {
        if (l10 == null) {
            return null;
        }
        long j10 = this.nextSeq - 1;
        if (j10 <= 0 || l10.longValue() > j10) {
            return null;
        }
        return l10;
    }

    private final void ensureSchema(SQLiteDatabase sQLiteDatabase) {
        if (!tableExists(sQLiteDatabase, TABLE_META)) {
            Companion.createSchema(sQLiteDatabase, this.capacity);
            return;
        }
        Cursor query = sQLiteDatabase.query(TABLE_META, new String[]{"capacity"}, "id=1", null, null, null, null, "1");
        Intrinsics.checkNotNullExpressionValue(query, "query(...)");
        try {
            if (!query.moveToFirst()) {
                Companion.createSchema(sQLiteDatabase, this.capacity);
                tr.c.a(query, null);
                return;
            }
            if (query.getInt(0) != this.capacity) {
                resetSchema(sQLiteDatabase);
            }
            Unit unit = Unit.f33282a;
            tr.c.a(query, null);
        } finally {
        }
    }

    private final void evictIfNeeded(SQLiteStatement sQLiteStatement, long j10) {
        int i10;
        while (true) {
            i10 = this.count;
            if (i10 <= 0 || this.totalBytes <= j10) {
                break;
            }
            int i11 = this.tail;
            long j11 = this.slotSeq[i11];
            int i12 = this.slotSize[i11];
            if (j11 == 0) {
                this.tail = (i11 + 1) % this.capacity;
            } else {
                sQLiteStatement.clearBindings();
                sQLiteStatement.bindLong(1, i11);
                sQLiteStatement.executeUpdateDelete();
                this.slotSeq[i11] = 0;
                this.slotSize[i11] = 0;
                this.totalBytes -= i12;
                this.count--;
                this.tail = (this.tail + 1) % this.capacity;
            }
        }
        if (i10 == 0) {
            this.head = -1;
            this.tail = 0;
        }
    }

    private final boolean hasMore(int i10, long j10, Long l10) {
        Pair<String, String[]> buildSelection = buildSelection(i10, j10, l10);
        String[] strArr = (String[]) buildSelection.b();
        Cursor query = this.dbHelper.getReadableDatabase().query(TABLE_SLOTS, new String[]{"seq"}, (String) buildSelection.a(), strArr, null, null, "seq DESC", "1");
        Intrinsics.checkNotNullExpressionValue(query, "query(...)");
        try {
            boolean moveToFirst = query.moveToFirst();
            tr.c.a(query, null);
            return moveToFirst;
        } finally {
        }
    }

    private final void loadSlots(SQLiteDatabase sQLiteDatabase) {
        kotlin.collections.i.y(this.slotSeq, 0L, 0, 0, 6, null);
        kotlin.collections.i.x(this.slotSize, 0, 0, 0, 6, null);
        Cursor query = sQLiteDatabase.query(TABLE_SLOTS, new String[]{"slot_id", "seq", "payload_size"}, null, null, null, null, null);
        Intrinsics.checkNotNullExpressionValue(query, "query(...)");
        while (query.moveToNext()) {
            try {
                int i10 = query.getInt(0);
                if (i10 >= 0 && i10 < this.capacity) {
                    this.slotSeq[i10] = query.getLong(1);
                    this.slotSize[i10] = query.getInt(2);
                }
            } finally {
            }
        }
        Unit unit = Unit.f33282a;
        tr.c.a(query, null);
    }

    private final void loadState() {
        SQLiteDatabase writableDatabase = this.dbHelper.getWritableDatabase();
        Intrinsics.checkNotNull(writableDatabase);
        writableDatabase.beginTransaction();
        try {
            ensureSchema(writableDatabase);
            MetaState readMeta = readMeta(writableDatabase);
            this.head = readMeta.getHead();
            this.tail = readMeta.getTail();
            this.count = readMeta.getCount();
            this.totalBytes = readMeta.getTotalBytes();
            this.nextSeq = readMeta.getNextSeq();
            loadSlots(writableDatabase);
            Unit unit = Unit.f33282a;
            writableDatabase.setTransactionSuccessful();
        } finally {
            writableDatabase.endTransaction();
        }
    }

    private final MetaState readMeta(SQLiteDatabase sQLiteDatabase) {
        Cursor query = sQLiteDatabase.query(TABLE_META, new String[]{"head", "tail", "count", "total_bytes", "next_seq"}, "id=1", null, null, null, null, "1");
        Intrinsics.checkNotNullExpressionValue(query, "query(...)");
        try {
            if (!query.moveToFirst()) {
                MetaState metaState = new MetaState(-1, 0, 0, 0L, 1L);
                tr.c.a(query, null);
                return metaState;
            }
            MetaState metaState2 = new MetaState(query.getInt(0), query.getInt(1), query.getInt(2), query.getLong(3), query.getLong(4));
            tr.c.a(query, null);
            return metaState2;
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                tr.c.a(query, th2);
                throw th3;
            }
        }
    }

    private final void resetSchema(SQLiteDatabase sQLiteDatabase) {
        sQLiteDatabase.execSQL("DROP TABLE IF EXISTS telemetry_ring_slots");
        sQLiteDatabase.execSQL("DROP TABLE IF EXISTS telemetry_ring_meta");
        Companion.createSchema(sQLiteDatabase, this.capacity);
    }

    private final boolean tableExists(SQLiteDatabase sQLiteDatabase, String str) {
        Cursor rawQuery = sQLiteDatabase.rawQuery("SELECT name FROM sqlite_master WHERE type='table' AND name=?", new String[]{str});
        Intrinsics.checkNotNullExpressionValue(rawQuery, "rawQuery(...)");
        try {
            boolean moveToFirst = rawQuery.moveToFirst();
            tr.c.a(rawQuery, null);
            return moveToFirst;
        } finally {
        }
    }

    private final void updateMeta(SQLiteDatabase sQLiteDatabase) {
        ContentValues contentValues = new ContentValues();
        contentValues.put("head", Integer.valueOf(this.head));
        contentValues.put("tail", Integer.valueOf(this.tail));
        contentValues.put("count", Integer.valueOf(this.count));
        contentValues.put("total_bytes", Long.valueOf(this.totalBytes));
        contentValues.put("next_seq", Long.valueOf(this.nextSeq));
        sQLiteDatabase.update(TABLE_META, contentValues, "id=1", null);
    }

    public final void append(@NotNull List<EntryPayload> entries) {
        Object b10;
        Object b11;
        SQLiteStatement compileStatement;
        SQLiteStatement compileStatement2;
        Intrinsics.checkNotNullParameter(entries, "entries");
        if (!entries.isEmpty()) {
            SQLiteDatabase writableDatabase = this.dbHelper.getWritableDatabase();
            try {
                Result.a aVar = Result.f33279e;
                Intrinsics.checkNotNull(writableDatabase);
                writableDatabase.beginTransaction();
                compileStatement = writableDatabase.compileStatement("UPDATE telemetry_ring_slots SET seq=?, channel_mask=?, payload_json=?, payload_size=? WHERE slot_id=?");
                compileStatement2 = writableDatabase.compileStatement("UPDATE telemetry_ring_slots SET seq=0, channel_mask=0, payload_json=NULL, payload_size=0 WHERE slot_id=?");
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f33279e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            try {
                for (EntryPayload entryPayload : entries) {
                    Intrinsics.checkNotNull(compileStatement);
                    Intrinsics.checkNotNull(compileStatement2);
                    appendEntry(compileStatement, compileStatement2, entryPayload);
                }
                Unit unit = Unit.f33282a;
                tr.c.a(compileStatement2, null);
                tr.c.a(compileStatement, null);
                updateMeta(writableDatabase);
                writableDatabase.setTransactionSuccessful();
                writableDatabase.endTransaction();
                b10 = Result.b(Unit.f33282a);
                Throwable e10 = Result.e(b10);
                if (e10 == null) {
                    return;
                }
                Log.INSTANCE.w(TAG, "TelemetryRing append rolled back; reloading in-memory state", e10);
                try {
                    loadState();
                    b11 = Result.b(Unit.f33282a);
                } catch (Throwable th3) {
                    Result.a aVar3 = Result.f33279e;
                    b11 = Result.b(kotlin.c.a(th3));
                }
                Throwable e11 = Result.e(b11);
                if (e11 != null) {
                    Log.INSTANCE.w(TAG, "TelemetryRing state reload failed after append error", e11);
                }
                throw e10;
            } catch (Throwable th4) {
                try {
                    throw th4;
                } catch (Throwable th5) {
                    tr.c.a(compileStatement2, th4);
                    throw th5;
                }
            }
        }
    }

    public final void clear() {
        Object b10;
        Object b11;
        SQLiteDatabase writableDatabase = this.dbHelper.getWritableDatabase();
        try {
            Result.a aVar = Result.f33279e;
            Intrinsics.checkNotNull(writableDatabase);
            writableDatabase.beginTransaction();
            writableDatabase.execSQL("UPDATE telemetry_ring_slots SET seq=0, channel_mask=0, payload_json=NULL, payload_size=0");
            this.head = -1;
            this.tail = 0;
            this.count = 0;
            this.totalBytes = 0L;
            this.nextSeq = 1L;
            kotlin.collections.i.y(this.slotSeq, 0L, 0, 0, 6, null);
            kotlin.collections.i.x(this.slotSize, 0, 0, 0, 6, null);
            updateMeta(writableDatabase);
            Unit unit = Unit.f33282a;
            writableDatabase.setTransactionSuccessful();
            writableDatabase.endTransaction();
            b10 = Result.b(Unit.f33282a);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33279e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        Throwable e10 = Result.e(b10);
        if (e10 != null) {
            Log.INSTANCE.w(TAG, "TelemetryRing clear failed; reloading in-memory state", e10);
            try {
                loadState();
                b11 = Result.b(Unit.f33282a);
            } catch (Throwable th3) {
                Result.a aVar3 = Result.f33279e;
                b11 = Result.b(kotlin.c.a(th3));
            }
            Throwable e11 = Result.e(b11);
            if (e11 != null) {
                Log.INSTANCE.w(TAG, "TelemetryRing state reload failed after clear error", e11);
            }
            throw e10;
        }
    }

    @NotNull
    public final TelemetryRingTypes.Snapshot snapshot(@NotNull Set<? extends TelemetryRingTypes.Channel> channels, long j10, TelemetryRingTypes.Budget budget, Long l10) {
        long j11;
        TelemetryRingTypes.BudgetType budgetType;
        String str;
        ArrayList arrayList;
        long j12;
        long j13;
        long j14;
        TelemetryRingTypes.LogEntry logEntry;
        Intrinsics.checkNotNullParameter(channels, "channels");
        if (!channels.isEmpty() && this.count != 0) {
            int i10 = 0;
            int i11 = 0;
            for (TelemetryRingTypes.Channel channel : channels) {
                i11 |= channel.getBit();
            }
            Long effectiveAckedEndOffset = effectiveAckedEndOffset(l10);
            Pair<String, String[]> buildSelection = buildSelection(i11, j10, effectiveAckedEndOffset);
            String str2 = (String) buildSelection.a();
            String[] strArr = (String[]) buildSelection.b();
            if (budget != null) {
                budgetType = budget.getType();
            } else {
                budgetType = null;
            }
            if (budgetType == TelemetryRingTypes.BudgetType.ROWS) {
                str = String.valueOf(budget.getLimit());
            } else {
                str = null;
            }
            Cursor query = this.dbHelper.getReadableDatabase().query(TABLE_SLOTS, new String[]{"seq", "payload_json", "payload_size"}, str2, strArr, null, null, "seq DESC", str);
            Intrinsics.checkNotNullExpressionValue(query, "query(...)");
            ArrayList arrayList2 = new ArrayList();
            long j15 = j10;
            int i12 = 0;
            long j16 = -1;
            long j17 = 0;
            while (query.moveToNext()) {
                try {
                    long j18 = query.getLong(i10);
                    String string = query.getString(1);
                    int i13 = query.getInt(2);
                    if (string != null) {
                        logEntry = decodePayload(string, j18);
                    } else {
                        logEntry = null;
                    }
                    if (logEntry != null) {
                        arrayList2.add(logEntry);
                        if (j16 < 0) {
                            j16 = j18;
                        }
                        i12++;
                        arrayList = arrayList2;
                        j17 += i13;
                        if (budget != null) {
                            int i14 = WhenMappings.$EnumSwitchMapping$0[budget.getType().ordinal()];
                            if (i14 != 1) {
                                if (i14 == 2) {
                                    if (j17 >= budget.getLimit()) {
                                        j12 = j16;
                                        j13 = j18;
                                        break;
                                    }
                                } else {
                                    throw new p();
                                }
                            } else if (i12 >= budget.getLimit()) {
                                j12 = j16;
                                j13 = j18;
                                break;
                            }
                        }
                        j15 = j18;
                        arrayList2 = arrayList;
                    }
                    i10 = 0;
                } finally {
                }
            }
            arrayList = arrayList2;
            j12 = j16;
            j13 = j15;
            Unit unit = Unit.f33282a;
            tr.c.a(query, null);
            if (arrayList.isEmpty()) {
                List l11 = CollectionsKt.l();
                if (effectiveAckedEndOffset != null) {
                    j14 = effectiveAckedEndOffset.longValue();
                } else {
                    j14 = -1;
                }
                return new TelemetryRingTypes.Snapshot(l11, j10, j14, false);
            }
            CollectionsKt.X(arrayList);
            return new TelemetryRingTypes.Snapshot(arrayList, j13, j12, hasMore(i11, j13, effectiveAckedEndOffset));
        }
        List l12 = CollectionsKt.l();
        if (l10 != null) {
            j11 = l10.longValue();
        } else {
            j11 = -1;
        }
        return new TelemetryRingTypes.Snapshot(l12, j10, j11, false);
    }
}
